package org.apache.cordova.musickit;

import android.content.Intent;
import android.util.Log;
import android.view.View;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.apple.android.sdk.authentication.AuthenticationFactory;
import com.apple.android.sdk.authentication.AuthenticationManager;
import com.apple.android.sdk.authentication.TokenError;
import com.apple.android.sdk.authentication.TokenResult;

import java.util.HashMap;


public class Musickit extends CordovaPlugin {
    private AuthenticationManager authenticationManager;
    private static final int REQUESTCODE_APPLEMUSIC_AUTH = 3456;
    private CallbackContext loginContext = null;
    private String appleDeveloperToken;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("authorize")) {
            String developerToken = args.getString(0);
            String authorizationMessage = args.getString(1);
            loginContext = callbackContext;
            cordova.setActivityResultCallback(this);
            this.authorize(developerToken, authorizationMessage);
            return true;
        }
        return false;
    }

    public void authorize(String developerToken, String authorizationMessage) {
        String startScreenMessage = "To play the full song, connect your app to Apple Music.";
        if (authorizationMessage != null) {
            startScreenMessage = authorizationMessage;
        }
        HashMap params = new HashMap<String, String>();
        params.put("ct", "mytestCampaignToken");
        params.put("at", "mytestAffiliateToken");

        if (authenticationManager == null) {
            authenticationManager = AuthenticationFactory.createAuthenticationManager(cordova.getActivity());
        }

        Intent intent = authenticationManager.createIntentBuilder(developerToken)
                .setHideStartScreen(false)
                .setStartScreenMessage(startScreenMessage)
                //set this if you want to set custom params
                .setCustomParams(params)
                // set this if you want to have contextual upsell
                .setContextId("1100742453")
                // invoke build to generate the intent, make sure to use startActivityForResult if you care about the music-user-token being returned.
                .build();
        cordova.getActivity().startActivityForResult(intent, REQUESTCODE_APPLEMUSIC_AUTH);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data)
    {
        if (requestCode == REQUESTCODE_APPLEMUSIC_AUTH) {
            TokenResult tokenResult = authenticationManager.handleTokenResult(data);
            PluginResult result;
            if (!tokenResult.isError()) {
                String musicUserToken = tokenResult.getMusicUserToken();
                result = new PluginResult(PluginResult.Status.OK, musicUserToken);
            } else {
                TokenError error = tokenResult.getError();
                result = new PluginResult(PluginResult.Status.ERROR, "Error");
            }
            result.setKeepCallback(true);
            loginContext.sendPluginResult(result);
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }
}

#import <Cordova/CDV.h>

@interface CordovaMusickit : CDVPlugin

- (void) getCountryCode:(CDVInvokedUrlCommand*)command;
- (void) requestAuthorization:(CDVInvokedUrlCommand*)command;
- (void) getStatus:(CDVInvokedUrlCommand*)command;
- (void) requestUserToken:(CDVInvokedUrlCommand*)command;

@end

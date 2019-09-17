#import <Cordova/CDV.h>

@interface CordovaMusickit : CDVPlugin

- (void) init:(CDVInvokedUrlCommand*)command;
- (void) getCountryCode:(CDVInvokedUrlCommand*)command;
- (void) requestAuthorization:(CDVInvokedUrlCommand*)command;
- (void) getStatus:(CDVInvokedUrlCommand*)command;
- (void) requestUserToken:(CDVInvokedUrlCommand*)command;
- (void) play:(CDVInvokedUrlCommand*)command;
- (void) resume:(CDVInvokedUrlCommand*)command;
- (void) seek:(CDVInvokedUrlCommand*)command;
- (void) stop:(CDVInvokedUrlCommand*)command;
- (void) pause:(CDVInvokedUrlCommand*)command;

@end

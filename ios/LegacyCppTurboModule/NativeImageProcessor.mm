#import "NativeImageProcessor.h"

// The app's generated Swift header also declares AppDelegate's React types,
// so their Objective-C headers have to come first.
#import <React-RCTAppDelegate/RCTDefaultReactNativeFactoryDelegate.h>
#import <React-RCTAppDelegate/RCTReactNativeFactory.h>
#import "LegacyCppTurboModule-Swift.h"

@implementation NativeImageProcessor

+ (NSString *)moduleName
{
  return @"NativeImageProcessor";
}

- (NSString *)process:(NSString *)imagePath
{
  return [ImageProcessor process:imagePath]; // existing Swift → C++
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeImageProcessorSpecJSI>(params);
}

@end

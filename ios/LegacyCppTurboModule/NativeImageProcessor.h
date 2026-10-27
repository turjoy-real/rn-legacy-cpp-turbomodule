#import <Foundation/Foundation.h>
#import <AppSpecs/AppSpecs.h>

NS_ASSUME_NONNULL_BEGIN

// iOS backend: implements the codegen'd protocol and forwards to Swift.
@interface NativeImageProcessor : NSObject <NativeImageProcessorSpec>
@end

NS_ASSUME_NONNULL_END

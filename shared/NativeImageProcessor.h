#pragma once

#include <AppSpecsJSI.h>

#include <memory>
#include <string>

#include "legacy/LegacyImageProcessor.h"

namespace facebook::react {

// Android backend: JavaScript calls straight into C++ over JSI. No Java.
class NativeImageProcessor
    : public NativeImageProcessorCxxSpec<NativeImageProcessor> {
 public:
  NativeImageProcessor(std::shared_ptr<CallInvoker> jsInvoker)
      : NativeImageProcessorCxxSpec(std::move(jsInvoker)) {}

  std::string process(jsi::Runtime& rt, std::string imagePath) {
    return legacy::processImage(imagePath);
  }
};

} // namespace facebook::react

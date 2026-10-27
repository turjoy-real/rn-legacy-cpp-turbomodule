#pragma once

#include <string>

// Stand-in for the legacy on-device image processing code. In the real app
// this is years of tuned C++; here it only has to be reachable from both
// platforms without being changed.
namespace legacy {

std::string processImage(const std::string& imagePath);

} // namespace legacy

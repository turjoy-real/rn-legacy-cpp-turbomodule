#include "LegacyImageProcessor.h"

#include <unistd.h>

namespace legacy {

std::string processImage(const std::string& imagePath) {
  // Also reports the memory page size the process runs with: 16384 on a
  // 16 KB Android device or an Apple device, 4096 on most older Android ones.
  return "processed " + imagePath + " in legacy C++ (page size " +
      std::to_string(sysconf(_SC_PAGESIZE)) + ")";
}

} // namespace legacy

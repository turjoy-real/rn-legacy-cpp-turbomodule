#include "LegacyImageProcessorC.h"
#include "LegacyImageProcessor.h"

#include <cstdlib>
#include <cstring>

char *legacy_process_image(const char *imagePath) {
  return strdup(legacy::processImage(imagePath).c_str());
}

void legacy_free_string(char *value) {
  free(value);
}

#pragma once

// C entry point so the existing Swift code can call the legacy C++ without
// Swift/C++ interop. Exposed to Swift through the iOS bridging header.
#ifdef __cplusplus
extern "C" {
#endif

// Returns a malloc'd string; free it with legacy_free_string.
char *legacy_process_image(const char *imagePath);
void legacy_free_string(char *value);

#ifdef __cplusplus
}
#endif

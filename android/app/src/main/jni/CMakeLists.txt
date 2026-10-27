cmake_minimum_required(VERSION 3.13)

# Must be named appmodules: React Native loads libappmodules.so at startup.
project(appmodules)

include(${REACT_ANDROID_DIR}/cmake-utils/ReactNative-application.cmake)

set(SHARED_DIR ${CMAKE_CURRENT_SOURCE_DIR}/../../../../../shared)

# The legacy C++ is compiled into the app's own native library. NDK r28+
# (this project uses r30) links it with 16 KB-aligned ELF segments by default.
target_sources(${CMAKE_PROJECT_NAME} PRIVATE
  ${SHARED_DIR}/legacy/LegacyImageProcessor.cpp
)
target_include_directories(${CMAKE_PROJECT_NAME} PUBLIC ${SHARED_DIR})

cmake_minimum_required(VERSION 3.13)

# Must be named appmodules: React Native loads libappmodules.so at startup.
project(appmodules)

include(${REACT_ANDROID_DIR}/cmake-utils/ReactNative-application.cmake)

set(SHARED_DIR ${CMAKE_CURRENT_SOURCE_DIR}/../../../../../shared)

target_sources(${CMAKE_PROJECT_NAME} PRIVATE
  ${SHARED_DIR}/legacy/LegacyImageProcessor.cpp
)
target_include_directories(${CMAKE_PROJECT_NAME} PUBLIC ${SHARED_DIR})

# 16 KB page size support. NDK r28+ does this by default; this project pins
# NDK r27, so the legacy C++ gets 16 KB-aligned ELF segments explicitly.
target_link_options(${CMAKE_PROJECT_NAME} PRIVATE
  "-Wl,-z,max-page-size=16384"
  "-Wl,-z,common-page-size=16384"
)

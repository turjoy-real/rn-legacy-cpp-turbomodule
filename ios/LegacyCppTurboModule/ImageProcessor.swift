import Foundation

// The existing Swift module that already called the legacy C++.
// It stays as it was; the TurboModule just forwards to it.
@objc public class ImageProcessor: NSObject {
  @objc public static func process(_ imagePath: String) -> String {
    guard let result = legacy_process_image(imagePath) else { return "" }
    defer { legacy_free_string(result) }
    return String(cString: result)
  }
}

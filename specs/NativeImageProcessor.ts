import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

// One spec, two backends:
// - Android: a pure C++ TurboModule (shared/NativeImageProcessor.h)
// - iOS: an Obj-C++ native module that calls the existing Swift → C++ path
export interface Spec extends TurboModule {
  process(imagePath: string): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeImageProcessor');

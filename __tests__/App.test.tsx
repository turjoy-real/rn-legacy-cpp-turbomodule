/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

// The native module only exists in the iOS and Android builds.
jest.mock('../specs/NativeImageProcessor', () => ({
  process: (imagePath: string) => `processed ${imagePath}`,
}));

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});

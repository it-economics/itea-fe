import { render } from '@testing-library/react';

import App from './app';

import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});

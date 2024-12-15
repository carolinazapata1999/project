import type { LighthouseConfig } from '../types';

export const LIGHTHOUSE_CONFIG: LighthouseConfig = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['accessibility'],
    formFactor: 'desktop',
    throttling: { cpuSlowdownMultiplier: 1 },
  },
};
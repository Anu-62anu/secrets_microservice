import { describe, it, expect } from 'vitest';
import { getCoreConfig, getRuntimeFlags } from '../../src/services/configService';

describe('configService', () => {
  it('returns nulls when vars absent', () => {
    const { LOOKERSDK_CLIENT_ID, LOOKERSDK_CLIENT_SECRET, LOOKER_EMBED_HOST } = getCoreConfig();
    expect(LOOKERSDK_CLIENT_ID).toBeNull();
    expect(LOOKERSDK_CLIENT_SECRET).toBeNull();
    expect(LOOKER_EMBED_HOST).toBeNull();
  });

  it('flags booleans for presence', () => {
    const flags = getRuntimeFlags();
    expect(flags).toHaveProperty('LOOKERSDK_CLIENT_ID');
    expect(flags).toHaveProperty('LOOKERSDK_CLIENT_SECRET');
    expect(flags).toHaveProperty('LOOKER_EMBED_HOST');
  });
});

import createCache, { EmotionCache } from '@emotion/cache'

/**
 * Creates an Emotion cache for managing CSS styles.
 */
export function createEmotionCache(): EmotionCache {
  const cache = createCache({ key: 'css', prepend: true })
  cache.compat = true
  return cache
}

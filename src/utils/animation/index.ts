import anime from 'animejs'
import effect from './effect'
export { hiddenEffect } from './effect'
export const handleAnimation = (
  element: HTMLElement | null,
  config: (anime.AnimeParams & {
    value: string
  })[]
) => {
  anime.remove(element)
  if (config.length == 1) {
    const item = config[0]
    const animeParams = effect[item.value as keyof typeof effect]?.(element, item)
    if (animeParams) anime(animeParams)
  } else {
    const tl = anime.timeline()
    for (const item of config) {
      const animeParams = effect[item.value as keyof typeof effect]?.(element, item)
      if (animeParams) tl.add(animeParams)
    }
  }
}
export const handleRemoveAnimation = (element: HTMLElement | null) => {
  anime.remove(element)
}

export function createAndPauseAnimation(
  element: HTMLElement | null,
  config: (anime.AnimeParams & {
    value: string
  })[]
) {
  anime.remove(element)
  if (config.length == 1) {
    const item = config[0]
    const animeParams = effect[item.value as keyof typeof effect]?.(element, item)
    if (animeParams) {
      animeParams.autoplay = false
      const animation = anime(animeParams)
      return {
        start: () => animation.play(),
      }
    }
  } else {
    const tl = anime.timeline({
      autoplay: false,
    })
    for (const item of config) {
      const animeParams = effect[item.value as keyof typeof effect]?.(element, item)
      if (animeParams) tl.add(animeParams)
    }
    return {
      start: () => tl.play(),
    }
  }
}

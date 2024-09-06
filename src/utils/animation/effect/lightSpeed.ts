import { outDefault } from '../outDefault'

export const lightSpeedInLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'left bottom'
  return {
    targets: element,
    keyframes: [
      { translateX: -100, skewX: 20, opacity: 0, easing: 'easeOutQuad', duration: 0 },
      {
        translateX: 20,
        skewX: -20,
        opacity: 1,
        easing: 'easeOutQuad',
        duration: Number(config.duration) * 0.5,
      },
      { translateX: 0, skewX: 0, easing: 'easeOutQuad', duration: Number(config.duration) * 0.5 },
    ],
    ...config,
  }
}

export const lightSpeedInRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateX: 100, skewX: -20, opacity: 0, easing: 'easeOutQuad', duration: 0 },
      {
        translateX: -20,
        skewX: 20,
        opacity: 1,
        easing: 'easeOutQuad',
        duration: Number(config.duration) * 0.5,
      },
      { translateX: 0, skewX: 0, easing: 'easeOutQuad', duration: Number(config.duration) * 0.5 },
    ],
    ...config,
  }
}

export const lightSpeedOutLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateX: 0, skewX: 0, opacity: 1, easing: 'easeOutQuad', duration: 0 },
      {
        translateX: 100,
        skewX: 20,
        opacity: 0,
        easing: 'easeOutQuad',
        duration: Number(config.duration) * 0.5,
      },
    ],
    ...outDefault,
    ...config,
  }
}

export const lightSpeedOutRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateX: 0, skewX: 0, opacity: 1, easing: 'easeOutQuad', duration: 0 },
      {
        translateX: -100,
        skewX: -20,
        opacity: 0,
        easing: 'easeOutQuad',
        duration: Number(config.duration) * 0.5,
      },
    ],
    ...outDefault,
    ...config,
  }
}

export default {
  lightSpeedInLeft,
  lightSpeedInRight,
  lightSpeedOutLeft,
  lightSpeedOutRight,
}

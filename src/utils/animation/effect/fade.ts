import { outDefault } from '../outDefault'

export const fadeIn = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    ...config,
  }
}

export const fadeInUp = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateY: [100, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const fadeInDown = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateY: [-100, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const fadeInLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateX: [-100, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const fadeInRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateX: [100, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const fadeInUpBig = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateY: [500, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const fadeInDownBig = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateY: [-500, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const fadeInLeftBig = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateX: [-500, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const fadeInRightBig = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateX: [500, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const fadeOut = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    opacity: [1, 0],
    easing: 'easeInOutQuad',
    ...outDefault,
    ...config,
  }
}

export const fadeOutUp = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateY: [0, -100],
    opacity: [1, 0],
    easing: 'easeInQuad',
    ...outDefault,
    ...config,
  }
}

export const fadeOutDown = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateY: [0, 100],
    opacity: [1, 0],
    easing: 'easeInQuad',
    ...outDefault,
    ...config,
  }
}

export const fadeOutLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,

    translateX: [0, -100],
    opacity: [1, 0],
    easing: 'easeInQuad',
    ...outDefault,
    ...config,
  }
}

export const fadeOutRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,

    translateX: [0, 100],
    opacity: [1, 0],
    easing: 'easeInQuad',
    ...outDefault,
    ...config,
  }
}

export const fadeOutUpBig = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,

    translateY: [0, -500],
    opacity: [1, 0],
    easing: 'easeInQuad',
    ...outDefault,
    ...config,
  }
}

export const fadeOutDownBig = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,

    translateY: [0, 500],
    opacity: [1, 0],
    easing: 'easeInQuad',
    ...outDefault,
    ...config,
  }
}

export const fadeOutLeftBig = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,

    translateX: [0, -500],
    opacity: [1, 0],
    easing: 'easeInQuad',
    ...outDefault,
    ...config,
  }
}

export const fadeOutRightBig = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateX: [0, 500],
    opacity: [1, 0],
    easing: 'easeInQuad',
    ...outDefault,
    ...config,
  }
}

export default {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInLeftBig,
  fadeInDownBig,
  fadeInUpBig,
  fadeInRightBig,
  fadeOut,
  fadeOutUp,
  fadeOutDown,
  fadeOutLeft,
  fadeOutRight,
  fadeOutLeftBig,
  fadeOutDownBig,
  fadeOutUpBig,
  fadeOutRightBig,
}

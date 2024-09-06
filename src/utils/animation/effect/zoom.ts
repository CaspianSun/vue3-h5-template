import { outDefault } from '../outDefault'

export const zoomIn = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [0.3, 1],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const zoomInDown = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [0.3, 1],
    opacity: [0, 1],
    translateY: [300, 0],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const zoomInLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [0.3, 1],
    opacity: [0, 1],
    translateX: [-300, 0],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const zoomInRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [0.3, 1],
    opacity: [0, 1],
    translateX: [300, 0],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const zoomInUp = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [0.3, 1],
    opacity: [0, 1],
    translateY: [-300, 0],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const zoomOut = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [1, 0.3],
    opacity: [1, 0],
    easing: 'easeOutQuad',
    ...outDefault,
    ...config,
  }
}

export const zoomOutDown = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [1, 0.3],
    opacity: [1, 0],
    translateY: [0, 300],
    easing: 'easeOutQuad',
    ...outDefault,
    ...config,
  }
}

export const zoomOutLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [1, 0.3],
    opacity: [1, 0],
    translateX: [0, -300],
    easing: 'easeOutQuad',
    ...outDefault,
    ...config,
  }
}

export const zoomOutRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [1, 0.3],
    opacity: [1, 0],
    translateX: [0, 300],
    easing: 'easeOutQuad',
    ...outDefault,
    ...config,
  }
}

export const zoomOutUp = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    scale: [1, 0.3],
    opacity: [1, 0],
    translateY: [0, -300],
    easing: 'easeOutQuad',
    ...outDefault,
    ...config,
  }
}

export default {
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
}

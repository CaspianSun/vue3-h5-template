import { outDefault } from '../outDefault'

export const flipInX = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    rotateX: [-90, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const flipInY = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    rotateY: [90, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const flipOutX = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    rotateX: [0, 90],
    opacity: [1, 0],
    easing: 'easeOutQuad',
    ...outDefault,
    ...config,
  }
}

export const flipOutY = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    rotateY: [0, 90],
    opacity: [1, 0],
    easing: 'easeOutQuad',
    ...outDefault,
    ...config,
  }
}

export default {
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
}

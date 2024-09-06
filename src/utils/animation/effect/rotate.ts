import { outDefault } from '../outDefault'

export const rotateIn = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    rotate: [-180, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    ...config,
  }
}

export const rotateInDownLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'left bottom'
  return {
    targets: element,
    rotate: [-90, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    complete: (anim) => {
      anim.animatables[0].target.style.transformOrigin = 'center'
    },
    ...config,
  }
}

export const rotateInDownRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'right bottom'
  return {
    targets: element,
    rotate: [90, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    complete: (anim) => {
      anim.animatables[0].target.style.transformOrigin = 'center'
    },
    ...config,
  }
}

export const rotateInUpLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'left bottom'
  return {
    targets: element,
    rotate: [90, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    complete: (anim) => {
      anim.animatables[0].target.style.transformOrigin = 'center'
    },
    ...config,
  }
}

export const rotateInUpRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'right bottom'
  return {
    targets: element,
    rotate: [-90, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    complete: (anim) => {
      anim.animatables[0].target.style.transformOrigin = 'center'
    },
    ...config,
  }
}

export const rotateOut = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    rotate: [0, 180],
    opacity: [1, 0],
    easing: 'easeInQuad',
    ...outDefault,
    ...config,
  }
}

export const rotateOutDownLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'left bottom'
  return {
    targets: element,
    rotate: [0, 90],
    opacity: [1, 0],
    easing: 'easeInQuad',
    complete: (anim) => {
      anim.animatables[0].target.style.transform = ''
      anim.animatables[0].target.style.transformOrigin = 'center'
    },
    ...config,
  }
}

export const rotateOutDownRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'right bottom'
  return {
    targets: element,
    rotate: [0, -90],
    opacity: [1, 0],
    easing: 'easeInQuad',
    complete: (anim) => {
      anim.animatables[0].target.style.transform = ''
      anim.animatables[0].target.style.transformOrigin = 'center'
    },
    ...config,
  }
}

export const rotateOutUpLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'left bottom'
  return {
    targets: element,
    rotate: [0, -90],
    opacity: [1, 0],
    easing: 'easeInQuad',
    complete: (anim) => {
      anim.animatables[0].target.style.transform = ''
      anim.animatables[0].target.style.transformOrigin = 'center'
    },
    ...config,
  }
}

export const rotateOutUpRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'right bottom'
  return {
    targets: element,
    rotate: [0, 90],
    opacity: [1, 0],
    easing: 'easeInQuad',
    complete: (anim) => {
      anim.animatables[0].target.style.transform = ''
      anim.animatables[0].target.style.transformOrigin = 'center'
    },
    ...config,
  }
}

export default {
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
}

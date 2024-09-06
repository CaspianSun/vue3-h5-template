import { outDefault } from '../outDefault'

export const bounce = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  const duration = Number(config.duration) * 0.16
  return {
    targets: element,
    translateY: [
      { value: -30, easing: 'easeOutQuad', duration },
      { value: 0, easing: 'easeInQuad', duration },
      { value: -15, easing: 'easeOutQuad', duration },
      { value: 0, easing: 'easeInQuad', duration },
      { value: -10, easing: 'easeOutQuad', duration },
      { value: 0, easing: 'easeInQuad', duration },
    ],
    ...config,
  }
}

export const bounceIn = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { scale: 0, opacity: 0, duration: 0 },
      { scale: 0.3, opacity: 0, easing: 'easeOutSine', duration: Number(config.duration) * 0.22 },
      {
        scale: 1.05,
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: Number(config.duration) * 0.17,
      },
      { scale: 0.9, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { scale: 1.05, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { scale: 1, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.27 },
    ],
    ...config,
  }
}

export const bounceInLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateX: 0, opacity: 0, duration: 0 },
      {
        opacity: 0,
        translateX: -400,
        easing: 'easeOutSine',
        duration: Number(config.duration) * 0.22,
      },
      {
        opacity: 1,
        translateX: 25,
        easing: 'easeInOutQuad',
        duration: Number(config.duration) * 0.17,
      },
      { translateX: -10, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateX: 5, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateX: 0, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.27 },
    ],
    ...config,
  }
}

export const bounceInRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateX: 0, opacity: 0, duration: 0 },
      {
        opacity: 0,
        translateX: 400,
        easing: 'easeOutSine',
        duration: Number(config.duration) * 0.22,
      },
      {
        opacity: 1,
        translateX: -25,
        easing: 'easeInOutQuad',
        duration: Number(config.duration) * 0.17,
      },
      { translateX: 10, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateX: -5, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateX: 0, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.27 },
    ],
    ...config,
  }
}

export const bounceInUp = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateY: 0, opacity: 0, duration: 0 },
      {
        opacity: 0,
        translateY: 400,
        easing: 'easeOutSine',
        duration: Number(config.duration) * 0.22,
      },
      {
        opacity: 1,
        translateY: -25,
        easing: 'easeInOutQuad',
        duration: Number(config.duration) * 0.17,
      },
      { translateY: 10, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateY: -5, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateY: 0, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.27 },
    ],
    ...config,
  }
}

export const bounceInDown = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateY: 0, opacity: 0, duration: 0 },
      {
        opacity: 0,
        translateY: -400,
        easing: 'easeOutSine',
        duration: Number(config.duration) * 0.22,
      },
      {
        opacity: 1,
        translateY: 25,
        easing: 'easeInOutQuad',
        duration: Number(config.duration) * 0.17,
      },
      { translateY: -10, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateY: 5, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateY: 0, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.27 },
    ],
    ...config,
  }
}

export const bounceOut = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { scale: 1, opacity: 1, duration: 1 },
      { scale: 1, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.27 },
      { scale: 1.05, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { scale: 0.9, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      {
        scale: 1.05,
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: Number(config.duration) * 0.17,
      },
      { scale: 0.3, opacity: 0, easing: 'easeOutSine', duration: Number(config.duration) * 0.22 },
    ],
    ...outDefault,
    ...config,
  }
}

export const bounceOutLeft = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateX: 0, opacity: 1, duration: 1 },
      { translateX: 10, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateX: -25, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateX: 25, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      {
        translateX: -400,
        opacity: 0,
        easing: 'easeOutSine',
        duration: Number(config.duration) * 0.22,
      },
      { translateX: 0, opacity: 0, duration: 0 },
    ],
    ...outDefault,
    ...config,
  }
}

export const bounceOutRight = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateX: 0, opacity: 1, duration: 1 },
      { translateX: -10, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateX: 25, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateX: -25, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      {
        translateX: 400,
        opacity: 0,
        easing: 'easeOutSine',
        duration: Number(config.duration) * 0.22,
      },
      { translateX: 0, opacity: 0, duration: 0 },
    ],
    ...outDefault,
    ...config,
  }
}

export const bounceOutUp = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateY: 0, opacity: 1, duration: 1 },
      { translateY: -10, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateY: 25, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateY: -25, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      {
        translateY: -400,
        opacity: 0,
        easing: 'easeOutSine',
        duration: Number(config.duration) * 0.22,
      },
      { translateY: 0, opacity: 0, duration: 0 },
    ],
    ...outDefault,
    ...config,
  }
}

export const bounceOutDown = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateY: 0, opacity: 1, duration: 1 },
      { translateY: 10, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateY: -25, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      { translateY: 25, easing: 'easeInOutQuad', duration: Number(config.duration) * 0.17 },
      {
        translateY: 400,
        opacity: 0,
        easing: 'easeOutSine',
        duration: Number(config.duration) * 0.22,
      },
      { translateY: 0, opacity: 0, duration: 0 },
    ],
    ...outDefault,
    ...config,
  }
}

export default {
  bounce,
  bounceIn,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceInDown,
  bounceOut,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  bounceOutDown,
}

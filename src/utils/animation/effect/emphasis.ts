export const flash = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    opacity: [1, 0, 1, 0, 1],
    easing: 'easeInOutQuad',
    ...config,
  }
}

export const rubberBand = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  const duration = Number(config.duration) * 0.25
  return {
    targets: element,
    keyframes: [
      { scaleX: 1.25, scaleY: 0.75, duration, easing: 'easeOutSine' },
      { scaleX: 0.75, scaleY: 1.25, duration, easing: 'easeOutSine' },
      { scaleX: 1.15, scaleY: 0.85, duration, easing: 'easeOutSine' },
      { scaleX: 1, scaleY: 1, duration, easing: 'easeOutSine' },
    ],
    easing: 'easeOutElastic(1, .5)',
    ...config,
  }
}

export const shakeX = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateX: [0, 20],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    ...config,
  }
}

export const shakeY = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    translateY: [0, 20],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    ...config,
  }
}

export const headShake = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { translateX: -5, easing: 'easeOutSine' },
      { translateX: 5, easing: 'easeOutSine' },
      { translateX: -5, easing: 'easeOutSine' },
      { translateX: 5, easing: 'easeOutSine' },
      { translateX: -5, easing: 'easeOutSine' },
      { translateX: 0, easing: 'easeOutSine' },
    ],
    ...config,
  }
}

export const swing = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  if (element) element.style.transformOrigin = 'top center'
  return {
    targets: element,
    rotate: [
      { value: 15, easing: 'easeInOutSine' },
      { value: -10, easing: 'easeInOutSine' },
      { value: 5, easing: 'easeInOutSine' },
      { value: -5, easing: 'easeInOutSine' },
      { value: 0, easing: 'easeInOutSine' },
    ],
    complete: (anim) => {
      anim.animatables[0].target.style.transformOrigin = 'center'
    },
    ...config,
  }
}

export const tada = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { scale: 1.2, rotate: 0, duration: Number(config.duration) * 0.4, easing: 'easeOutExpo' },
      { rotate: 10, duration: Number(config.duration) * 0.05, easing: 'easeInOutSine' },
      { rotate: -10, duration: Number(config.duration) * 0.05, easing: 'easeInOutSine' },
      { rotate: 10, duration: Number(config.duration) * 0.05, easing: 'easeInOutSine' },
      { rotate: -10, duration: Number(config.duration) * 0.05, easing: 'easeInOutSine' },
      { rotate: 0, duration: Number(config.duration) * 0.05, easing: 'easeInOutSine' },
      { scale: 1, duration: Number(config.duration) * 0.4, easing: 'easeOutExpo' },
    ],
    ...config,
  }
}

export const jello = (element: HTMLElement | null, config: anime.AnimeAnimParams): anime.AnimeAnimParams => {
  return {
    targets: element,
    keyframes: [
      { skewX: 0, skewY: 0, duration: 0 },
      {
        skewX: -12.5,
        skewY: -12.5,
        duration: Number(config.duration) * 0.2,
        easing: 'easeOutSine',
      },
      { skewX: 6.25, skewY: 6.25, duration: Number(config.duration) * 0.2, easing: 'easeOutSine' },
      {
        skewX: -3.125,
        skewY: -3.125,
        duration: Number(config.duration) * 0.2,
        easing: 'easeOutSine',
      },
      {
        skewX: 1.5625,
        skewY: 1.5625,
        duration: Number(config.duration) * 0.2,
        easing: 'easeOutSine',
      },
      { skewX: 0, skewY: 0, duration: Number(config.duration) * 0.2, easing: 'easeOutSine' },
    ],
    ...config,
  }
}

export default {
  flash,
  rubberBand,
  shakeX,
  shakeY,
  headShake,
  swing,
  tada,
  jello,
}

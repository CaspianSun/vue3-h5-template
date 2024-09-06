export const outDefault: anime.AnimeAnimParams = {
  complete: (anim) => {
    anim.animatables[0].target.style.transform = ''
  },
}

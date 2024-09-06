export enum ImageType {
  PNG = '.png',
  JPG = '.jpg',
  JPEG = '.jpeg',
  GIF = '.gif',
  SVG = '.svg',
  WEBP = '.webp',
}
declare global {
  enum ImageType {
    PNG = '.png',
    JPG = '.jpg',
    JPEG = '.jpeg',
    GIF = '.gif',
    SVG = '.svg',
    WEBP = '.webp',
  }
}

export type Images = {
  [key: string]: string | Images | ImageType
}

const OSS_URL_END_WITHOUT_SLASH = ''

let isUpdateImageUrls = false
export function updateImageUrls(obj: Record<string, any>, parentKeys: string[] = []) {
  if (isUpdateImageUrls && !parentKeys) return
  isUpdateImageUrls = true
  const currentKeys = [...parentKeys]
  const url = currentKeys.length ? `${OSS_URL_END_WITHOUT_SLASH}/${currentKeys.join('/')}/` : `${OSS_URL_END_WITHOUT_SLASH}/`
  for (const key in obj) {
    const keyArr = key.split(/(?=[A-Z])/)
    const keyStr = keyArr.join('-').toLowerCase()
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      updateImageUrls(obj[key], [...parentKeys, keyStr])
    } else if ([ImageType.PNG, ImageType.JPG, ImageType.JPEG, ImageType.GIF, ImageType.SVG, ImageType.WEBP].includes(obj[key] as ImageType)) {
      obj[key] = `${url}${keyStr}${obj[key]}`
    } else if (typeof obj[key] === 'string') {
      if (obj[key].startsWith('/')) {
        obj[key] = `${url}${obj[key]}`
      } else {
        obj[key] = `${url}/${obj[key]}`
      }
    }
  }
}

const imagePreloader = (url: string) => {
  return new Promise<boolean>((resolve, reject) => {
    const image = new Image()
    image.src = url
    image.onload = () => resolve(true)
    image.onerror = () => reject(false)
  })
}

export const imagesPreloader = async (imgs: Record<string, string>) => {
  const promiseArr: ReturnType<typeof imagePreloader>[] = []
  Object.keys(imgs).forEach((key) => {
    promiseArr.push(imagePreloader(imgs[key]))
  })
  try {
    const res = await Promise.allSettled(promiseArr)
    return res.every((item) => item.status === 'fulfilled')
  } catch (err) {
    console.log(err)
    return false
  }
}

import fade from './fade'
import rotate from './rotate'
import bounce from './bounce'
import zoom from './zoom'
import lightSpeed from './lightSpeed'
import flip from './flip'
import emphasis from './emphasis'

export default {
  ...fade,
  ...rotate,
  ...bounce,
  ...zoom,
  ...lightSpeed,
  ...flip,
  ...emphasis,
}

export const hiddenEffect = [
  'fadeIn',
  'fadeInUp',
  'fadeInDown',
  'fadeInLeft',
  'fadeInRight',
  'fadeInUpBig',
  'fadeInDownBig',
  'fadeInLeftBig',
  'fadeInRightBig',
  'bounceIn',
  'bounceInUp',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'zoomIn',
  'zoomInUp',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'lightSpeedIn',
  'lightSpeedInRight',
  'lightSpeedInLeft',
  'flipInX',
  'flipInY',
]

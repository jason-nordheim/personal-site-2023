import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const skillBubbleFn = createRecipe('undefined', {
  "variant": "concept"
}, [])

const skillBubbleVariantMap = {
  "variant": [
    "concept",
    "framework",
    "language",
    "library",
    "undefined",
    "technology"
  ]
}
const skillBubbleVariantKeys = Object.keys(skillBubbleVariantMap)
export const skillBubble = Object.assign(skillBubbleFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: skillBubbleVariantKeys,
  variantMap: skillBubbleVariantMap,
  splitVariantProps(props) {
    return splitProps(props, skillBubbleVariantKeys)
  },
})
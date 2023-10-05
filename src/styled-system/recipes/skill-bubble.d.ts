/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type SkillBubbleVariant = {
  variant: "concept" | "framework" | "language" | "library" | "undefined" | "technology"
}

type SkillBubbleVariantMap = {
  [key in keyof SkillBubbleVariant]: Array<SkillBubbleVariant[key]>
}

export type SkillBubbleVariantProps = {
  [key in keyof SkillBubbleVariant]?: ConditionalValue<SkillBubbleVariant[key]>
}

interface SkillBubbleRecipe {
  __type: SkillBubbleVariantProps
  (props?: SkillBubbleVariantProps): string
  raw: (props?: SkillBubbleVariantProps) => SkillBubbleVariantProps
  variantMap: SkillBubbleVariantMap
  variantKeys: Array<keyof SkillBubbleVariant>
  splitVariantProps<Props extends SkillBubbleVariantProps>(props: Props): [SkillBubbleVariantProps, Pretty<Omit<Props, keyof SkillBubbleVariantProps>>]
}

/** custom styles for skill buttons */
export declare const skillBubble: SkillBubbleRecipe
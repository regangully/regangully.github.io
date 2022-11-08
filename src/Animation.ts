export const OPACITY_VARIANT = {
  hidden: { opacity: 0, translateY: 20 },
  show: { opacity: 1, translateY: 0 }
}

export const ANIMATE_PROPS = (delay: number) => ({
  variants: OPACITY_VARIANT,
  initial: "hidden",
  animate: "show",
  transition: { delay, type: "spring" }
})

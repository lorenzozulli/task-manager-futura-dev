export const OrientationState = {
  PORTRAIT: "PORTRAIT",
  LANDSCAPE: "LANDSCAPE",
}

export type OrientationState = typeof OrientationState [keyof typeof OrientationState];
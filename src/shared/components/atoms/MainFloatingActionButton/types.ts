export interface MainFloatingActionButtonProps {
  state: MainFloatingActionButtonState;
}

export const MainFloatingActionButtonState = {
  ADD: 'ADD',
  BACK: 'BACK',
}
export type MainFloatingActionButtonState = typeof MainFloatingActionButtonState[keyof typeof MainFloatingActionButtonState];

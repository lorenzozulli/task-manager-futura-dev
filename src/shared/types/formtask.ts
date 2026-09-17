import type { Task } from "../models";

export const FormState = {
  ADD: "ADD",
  EDIT: "EDIT",
}

export type FormTask = {
  state: FormState,
  currentTask: Task | null,
}

export type FormState = typeof FormState[keyof typeof FormState];
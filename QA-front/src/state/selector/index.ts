import { AutoMateState } from "../interfaces"

export function selectUser(state: AutoMateState): boolean {
  return state.entities.user
}

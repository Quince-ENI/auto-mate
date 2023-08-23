import { AutoMateState } from "./interfaces"

export const INITIAL_STATE: AutoMateState = {
  ui: {
    filter: "test",
  },
  entities: {
    isUserLogged: false,
    user: {
      name: "defaultName",
      picture: "defaultpicture",
      email: "defaultMail",
    },
  },
}

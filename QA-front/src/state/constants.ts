import { AutoMateState } from './interfaces';

export const INITIAL_STATE: AutoMateState = {
  ui: {
    filter: {
      sites: []
    },
    carsLoading: false,
    routesLoading: false,
    isUserReceive: false
  },
  entities: {
    isUserLogged: undefined,
    sites: [],
    routes: [],
    user: {
      name: 'defaultName',
      picture: 'defaultpicture',
      email: 'defaultMail',
      role: 'user'
    },
    cars: []
  }
};

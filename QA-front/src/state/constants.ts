import { AutoMateState } from './interfaces';

export const INITIAL_STATE: AutoMateState = {
  ui: {
    filter: {
      site: '',
      dates: [null, null]
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

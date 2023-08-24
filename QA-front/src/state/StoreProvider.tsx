import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

// TODO: uncomment when implementing store interface StoreProviderProps {}

const StoreProvider: FC<PropsWithChildren> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default StoreProvider;

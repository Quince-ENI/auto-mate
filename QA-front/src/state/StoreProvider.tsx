import { FC, PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { store } from "./store"

interface StoreProviderProps {}

const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider

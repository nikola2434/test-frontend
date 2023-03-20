import { FC, PropsWithChildren, useState } from "react";
import { Provider } from "urql";
import client from "~/api/gql";
import { GlobalState, GlobalStateProvider } from "~/screens/globalState";

const MainProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [globalState] = useState(new GlobalState());
  if (window.location.pathname === "/") window.location.pathname = "/orders/";

  return (
    <Provider value={client}>
      <GlobalStateProvider value={globalState}>{children}</GlobalStateProvider>
    </Provider>
  );
};

export default MainProvider;

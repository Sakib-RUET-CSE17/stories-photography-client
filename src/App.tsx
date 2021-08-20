import { createContext, useState } from 'react';
import { ILoggedInUser } from 'types';
import AppRouter from './AppRouter';
import Header from './components/common/Header';

type AppContextInterface = [loggedInUser: ILoggedInUser, setLoggedInUser: (arg0: ILoggedInUser) => void]

export const UserContext = createContext<AppContextInterface>([{} as ILoggedInUser, () => 0]);

function App() {
  const [loggedInUser, setLoggedInUser] = useState<ILoggedInUser>({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <AppRouter>
        <Header />
      </AppRouter>
    </UserContext.Provider >
  );
}

export default App;

import React from 'react';

const MainContext = React.createContext<any>({});

interface IAppProviderProps {
  children: React.ReactNode;
}

export const MainProvider: React.FC<IAppProviderProps> = ({ children }) => {

  const [serials, setSerials] = React.useState({});
  const [isMock, setIsMock] = React.useState(true); // to change to false by default and fix clock
  const [beatsPerBar, setBeatsPerBar] = React.useState(4);

  return (
    <MainContext.Provider value={{ serials, setSerials, isMock, setIsMock, beatsPerBar, setBeatsPerBar }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => React.useContext(MainContext);

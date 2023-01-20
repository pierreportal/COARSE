import React from 'react';
import { connect } from './utils/pinsMap';
import { useMainContext } from './context';
import { Dashboard } from './components/Dashboard';

interface IAppProps {
  mock: boolean | undefined;
}

const App: React.FC<IAppProps> = ({ mock }) => {

  const { setSerials, setIsMock } = useMainContext();

  React.useEffect(() => {
    const { unexportOnClose, serials: _serials } = connect(mock);
    setSerials(_serials);
    setIsMock(mock);
    return unexportOnClose;
  }, []);

  return <Dashboard />;
}


module.exports = App;
export default App;

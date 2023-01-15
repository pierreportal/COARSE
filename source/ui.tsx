import React from 'react';
import { Text } from 'ink';
import { connect } from './utils/pinsMap';
import { useClock } from './hooks/useClock';
import { ISerials } from './types';

interface IAppProps {
  mock: boolean | undefined;
}

const App: React.FC<IAppProps> = ({ mock }) => {

  const serials = React.useRef<ISerials>();

  React.useEffect(() => {
    const { unexportOnClose, serials: _serials } = connect(mock);
    serials.current = _serials;
    return unexportOnClose;
  }, []);

  //TODO: Need a context wrapper to store serials

  useClock((value: number) => {
    console.log('value: ', value, mock);
  }, mock);

  return (

    <Text>
      Hello
    </Text>
  )
}


module.exports = App;
export default App;

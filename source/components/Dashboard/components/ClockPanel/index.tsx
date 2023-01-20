import React from 'react';
import { Box, Text } from 'ink';
import { useMainContext } from '../../../../context/index';
import { useClock } from '../../../../hooks/useClock';

export const ClockPanel: React.FC = () => {

  const [count, setCount] = React.useState(0);

  const { isMock, beatsPerBar } = useMainContext();

  useClock(() => setCount(count => (count + 1) % beatsPerBar), isMock);

  return (
    <Box width={5} justifyContent="center" borderColor="cyan">
      <Text
        backgroundColor={
          count === 0 ? 'red'
            : count % 2 === 0 ? "cyan"
              : "black"
        }
        bold
        color={
          count === 0 ? "white"
            : count % 2 === 0 ? "black"
              : "cyan"
        }>
        {` ${count + 1} `}
      </Text>
    </Box>
  );
}

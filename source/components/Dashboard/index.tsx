import React from 'react';
import { Box, useInput } from 'ink';
import { ClockPanel } from './components/ClockPanel';
import { SerialsBoard } from './components/SerialsBoard/index';

export const Dashboard: React.FC = () => {


  const cmd = {
    's': () => true,
  } as any;

  useInput((input, key) => {
    cmd[input]?.();

    if (key.leftArrow) {
      // Left arrow key pressed
    }
  });
  return (
    <Box>
      <ClockPanel />
      <SerialsBoard />
    </Box>
  );
}

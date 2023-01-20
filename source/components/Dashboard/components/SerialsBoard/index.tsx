import React from 'react';
import { Box } from 'ink';
import Table from 'ink-table'
import { useMainContext } from '../../../../context/index';

export const SerialsBoard: React.FC = () => {

  const { serials } = useMainContext();

  const { outputs } = serials;

  const parsedOutputs = outputs ? Object.entries(outputs).map(([k, v]) => ({ [k]: v })) : [];

  return (
    <Box>
      <Table data={parsedOutputs as any} />
    </Box>
  );
}

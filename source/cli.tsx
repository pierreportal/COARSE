#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ [TODO] 

	Options
	  --mock, -m  Mock serial connection

	Examples
	  $ [TODO]
`, {
  flags: {
    mock: {
      type: 'boolean',
      alias: 'm'
    }
  }
});

render(<App mock={cli.flags.mock} />);

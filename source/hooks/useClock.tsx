import React from 'react';
import { Gpio } from 'onoff';
import { IGpioInputPin } from '../types';
import { connect } from '../utils/pinsMap'


export const useClock = (cb: (value?: number) => void, mock?: boolean) => {

  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (sent) {
      cb();
    }
  }, [sent]);

  const clockRef = React.useRef<Gpio | IGpioInputPin | null>(connect(mock).serials.inputs.CLOCK);

  clockRef.current?.watch(function (err: Error, value: number) {

    if (err) {
      console.error('[ERROR: Clock signal]: ', err);
      return;
    }

    if (value === 1 && !sent) {
      setSent(true);

    } else if (value === 0 && sent) {
      setSent(false);
    }
  });

  React.useEffect(() => {
    return () => {
      clockRef.current = null;
    }
  }, [clockRef]);
}



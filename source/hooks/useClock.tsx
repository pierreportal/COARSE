import { Gpio } from 'onoff';
import React from 'react';
import { IGpioInputPin } from '../types';
import { connect } from '../utils/pinsMap'

export const useClock = (cb: (value: number) => void, mock?: boolean) => {
  const clockRef = React.useRef<Gpio | IGpioInputPin | null>(connect(mock).serials.inputs.CLOCK);

  React.useEffect(() => {
    clockRef.current?.watch(function(err: Error, value: number) {
      if (err) {
        console.error('[ERROR: Clock signal]: ', err);
        return;
      }
      cb(value);
    });

    return () => {
      clockRef.current = null;
    }
  }, [clockRef]);
}


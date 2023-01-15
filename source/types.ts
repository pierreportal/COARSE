import { Gpio } from 'onoff';

export enum Outputs {
  LED = 'LED',
}

export enum Inputs {
  CLOCK = 'CLOCK',
}

export interface IGpioInputPin {
  watch: (callback: (err: any, value: number) => void) => void;
}

export interface ISerials {
  outputs: {
    [key in Outputs]: Gpio | number;
  }
  inputs: {
    [key in Inputs]: Gpio | IGpioInputPin;
  };
}


import { Gpio } from 'onoff';
import { ISerials } from '../types';

export const connect = (mock: boolean | undefined) => {
  if (mock) {
    return {
      serials: {
        outputs: {
          LED: 1,
        },
        inputs: {
          CLOCK: {
            watch: (callback: (err: any, value: number) => void) => {
              setInterval(() => callback(null as any, 1), 1000);
            }
          },
        },
      },
      unexportOnClose: () => { },
    }
  } else {
    const serials: ISerials = {
      outputs: {
        //TODO: Add outputs CV_OUT, GATE_OUT
        LED: new Gpio(17, 'out'),
      },
      inputs: {
        //TODO: Add inputs CV_IN, RESET
        CLOCK: new Gpio(4, 'in', 'both'),
      },
    }

    return {
      serials,
      unexportOnClose: () => { //function to run when exiting program
        Object.keys(serials.outputs).forEach((key: any) => {
          (serials.outputs as any)[key].writeSync(0);
          (serials.outputs as any)[key].unexport();
        });

        Object.keys(serials.inputs).forEach((key: any) => {
          (serials.inputs as any)[key].unexport();
        });
      },
    };
  };
}

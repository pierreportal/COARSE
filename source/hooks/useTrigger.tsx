import React from 'react';

export const useTrigger = (condition: boolean, cb: () => void) => {
    const [sent, setSent] = React.useState(false);
    React.useEffect(() => {
        if (sent) {
            cb();
        }
    }, [sent]);
    if (condition && !sent) {
        setSent(true);
    } else if (!condition && sent) {
        setSent(false);
    };
}
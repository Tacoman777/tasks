import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    let [valueL, setValueL] = useState<number>(1);
    let [valueR, setValueR] = useState<number>(5);

    return (
        <div>
            <span data-testid="left-die">
                <Button
                    onClick={() => {
                        setValueL((valueL = d6()));
                    }}
                >
                    Roll Left
                </Button>
                Left Dice: {valueL}
            </span>
            <span data-testid="right-die">
                <Button
                    onClick={() => {
                        setValueR((valueR = d6()));
                    }}
                >
                    Roll Right
                </Button>
                Right Dice: {valueR}
            </span>
            <span>
                {valueL === valueR && valueL === 1 && <span> Lose</span>}
            </span>
            <span>
                {valueL === valueR && valueL !== 1 && <span> Win</span>}
            </span>
        </div>
    );
}

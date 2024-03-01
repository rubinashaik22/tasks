import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    // eslint-disable-next-line prefer-const
    let [attempts, setAttempts] = useState<number>(4);
    // eslint-disable-next-line prefer-const
    let [inProgress, updateInProgress] = useState<boolean>(false);

    function changeInProgress(): void {
        updateInProgress(
            inProgress == true ? (inProgress = false) : (inProgress = true)
        );
    }

    return (
        <div>
            <span>{attempts}</span>
            <Button
                disabled={attempts == 0 || inProgress}
                onClick={() => {
                    setAttempts((attempts -= 1));
                    changeInProgress();
                }}
            >
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={changeInProgress}>
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => setAttempts((attempts += 1))}
            >
                Mulligan
            </Button>
        </div>
    );
}

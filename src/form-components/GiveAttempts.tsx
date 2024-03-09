import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    const parsed = parseInt(attemptsRequested);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>{attemptsLeft}</div>
            <Form.Group controlId="giving attempts">
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                disabled={attemptsLeft == 0}
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    !isNaN(parseInt(attemptsRequested))
                        ? setAttemptsLeft(parsed + attemptsLeft)
                        : setAttemptsLeft(attemptsLeft)
                }
            >
                gain
            </Button>
        </div>
    );
}

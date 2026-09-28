import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
export function GiveAttempts(): React.JSX.Element {
    const [numA, setNumA] = useState<string>("0");
    const [attempts, setAttempts] = useState<number>(3);
    const quizAttempts = parseInt(numA) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(quizAttempts + attempts);
                }}
            >
                Gain
            </Button>
            <Form.Group controlId="formQuizAttemptRequests">
                <Form.Label>Gain How many Quiz Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numA}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNumA(() => event.target.value);
                    }}
                />
            </Form.Group>
            Quiz Attempts Remaining: {attempts}
        </div>
    );
}

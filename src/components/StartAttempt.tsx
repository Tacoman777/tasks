import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [quizActive, setquizActive] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        setquizActive(true);
                        setAttempts(attempts - 1);
                    }}
                    disabled={quizActive || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => {
                        setquizActive(false);
                    }}
                    disabled={!quizActive}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => {
                        setAttempts(1 + attempts);
                    }}
                    disabled={quizActive}
                >
                    Mulligan
                </Button>
                Quiz Attempts Remaining: {attempts}
            </div>
            <div></div>
        </div>
    );
}

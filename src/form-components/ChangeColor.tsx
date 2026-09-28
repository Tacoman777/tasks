import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((option) => (
                    <Form.Check
                        key={option}
                        inline
                        type="radio"
                        name="color"
                        id={`color-${option}`}
                        label={option}
                        value={option}
                        checked={color === option}
                        onChange={() => {
                            setColor(option);
                        }}
                    />
                ))}
            </div>
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "cyan",
        "magenta",
        "pink",
        "maroon",
        "purple"
    ];
    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color) => (
                <div key={color} style={{ display: "inline-block" }}>
                    <Form.Check
                        type="radio"
                        id={`radio-${color}`}
                        label={color}
                        name="color"
                        value={color}
                        inline={true}
                        style={{ backgroundColor: color }}
                        onChange={() => setColor(color)}
                    />
                </div>
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}

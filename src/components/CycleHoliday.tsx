import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Halloween");
    return (
        <div>
            <Button
                onClick={() => setHoliday(NEXT_HOLIDAY_ALHEBETICAL[holiday])}
            >
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(NEXT_HOLIDAY[holiday])}>
                Advance by Year
            </Button>
            {holiday === "Christmas" ? (
                <div>Holiday: 🎄</div>
            ) : holiday === "Thanksgiving" ? (
                <div>Holiday: 🦃</div>
            ) : holiday === "Halloween" ? (
                <div>Holiday: 🎃</div>
            ) : holiday === "Diwali" ? (
                <div>Holiday: 🪔</div>
            ) : (
                <div>Holiday: 🎉</div>
            )}
        </div>
    );
}

const NEXT_HOLIDAY: Record<string, string> = {
    NewYearsDay: "Halloween",
    Halloween: "Diwali",
    Diwali: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "NewYearsDay"
};

const NEXT_HOLIDAY_ALHEBETICAL: Record<string, string> = {
    Christmas: "Diwali",
    Diwali: "Halloween",
    Halloween: "NewYearsDay",
    NewYearsDay: "Thanksgiving",
    Thanksgiving: "Christmas"
};

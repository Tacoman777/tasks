import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holidays = "🎅" | "🎃" | "🐇" | "🎂" | "🦅";
//Alphabet: "🎂" | "🐇" |"🎃" | "🦅" | "🎅"
//Date: "🐇" | "🦅" | "🎂" | "🎃" | "🎅" Note: My birthday is in September
export function CycleHoliday(): React.JSX.Element {
    const [day, setHoliday] = useState<Holidays>("🎂");
    function changeHolidayA(): void {
        setHoliday(
            day === "🎂" ? "🐇"
            : day === "🐇" ? "🎃"
            : day === "🎃" ? "🦅"
            : day === "🦅" ? "🎅"
            : "🎂",
        );
    }
    function changeHolidayD(): void {
        setHoliday(
            day === "🐇" ? "🦅"
            : day === "🦅" ? "🎂"
            : day === "🎂" ? "🎃"
            : day === "🎃" ? "🎅"
            : "🐇",
        );
    }
    return (
        <div>
            <div>
                <Button onClick={changeHolidayA}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={changeHolidayD}>Advance by Year</Button>
            </div>
            <span>Holiday: {day}</span>
        </div>
    );
}

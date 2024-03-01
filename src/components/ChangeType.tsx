import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function change(): void {
        setType(
            type === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <span>
                {type === "short_answer_question" && (
                    <div>Short Answer Question</div>
                )}
                {type === "multiple_choice_question" && (
                    <div>Multiple Choice Question</div>
                )}
            </span>
            <Button onClick={change}>Change Type</Button>
        </div>
    );
}

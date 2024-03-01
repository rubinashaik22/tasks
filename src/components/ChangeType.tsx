import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    // eslint-disable-next-line prefer-const
    let [type, setType] = useState<QuestionType>("short_answer_question");

    function change(): void {
        setType(
            type === "short_answer_question"
                ? (type = "multiple_choice_question")
                : (type = "short_answer_question")
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

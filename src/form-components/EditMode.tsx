import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

    /*function updateName(event: React.ChangeEvent<HTMLSelectElement>) {
        setName(event.target.value);
    }*/

    function handleStudentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Edit"
                    checked={inEditMode}
                    onChange={() => setEditMode(!inEditMode)}
                />
            </div>

            {inEditMode ? (
                <Form.Group controlId="FormPersonName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(event: ChangeEvent) =>
                            setName(event.target.value)
                        }
                    />
                    <Form.Check
                        type="switch"
                        id="is-student"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={handleStudentChange}
                    />
                </Form.Group>
            ) : (
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}

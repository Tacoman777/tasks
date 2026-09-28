import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): React.JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditing(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
        //setIsStudent(!isStudent);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <span>
                {name} is {isStudent ? "a student." : "not a student."}
            </span>
            <Form.Check
                type="switch"
                id="is-editing-check"
                label="Edit Mode Switch"
                checked={isEditing}
                onChange={updateEditing}
            />
            {isEditing && (
                <div>
                    <Form.Group controlId="EditingStudentName">
                        <Form.Label>Editing Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(() => event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            )}
        </div>
    );
}

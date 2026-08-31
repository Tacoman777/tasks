import React from "react";
import "./App.css";
import sceptile from "./assets/images/Sceptile.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks, TypeScript, and Miles
                <h1>H1 text</h1>
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                className="redRect"
                                style={{ backgroundColor: "red" }}
                            >
                                <Button
                                    onClick={() => {
                                        console.log("Hello World!");
                                    }}
                                >
                                    Log Hello World
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="redRect"
                                style={{ backgroundColor: "red" }}
                            >
                                <img src={sceptile} alt="Random Sceptile png" />
                                <div>
                                    <ul>
                                        <li>Sceptile is a pokemon</li>
                                        <li>Sceptile is green</li>
                                        <li>Sceptile is grass type</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;

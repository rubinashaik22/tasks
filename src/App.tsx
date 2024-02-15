import React from "react";
import "./App.css";
import "./ButterflyFamilyTree.jpg";
import "./monarch-butterfly-grass_3x2.avif";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                RUBINA SHAIK: UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "#FFB6C1" }}>Rubina&apos;s App</h1>
            <img
                src={require("./ButterflyFamilyTree.jpg")}
                height="300"
                width="500"
                alt="Butterfly"
            />
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>

            <p>Hello World</p>

            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div
                                style={{
                                    width: "500px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Second column.
                            <div
                                style={{
                                    width: "500px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;

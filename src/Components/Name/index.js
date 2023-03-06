import React, { useState } from "react";
import Home from "../Home";
import Styles from "./index.module.scss";
import Form from "react-bootstrap/Form";

const Name = (props) => {
  const [name, setName] = useState(" ");
  const [show, setShow] = useState(false);
  return (
    <div className={Styles["name"]}>
      {!show ? (
        <div>
          <Form>
            <Form.Group className="mb-4" controlId="formBasic">
              <Form.Label> ¿What`s your name?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <button
                variant="primary"
                type="submit"
                onClick={() => setShow(true)}
                className={Styles["btn"]}
              >
                <span>Go to Cv</span>
                <em></em>
              </button>
            </div>
          </Form>

          {/* <div className={Styles["flex"]}>
            What`s your name?
            <input
              type="text"
              name="username"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>
            <button onClick={() => setShow(true)}>Go</button>
          </div> */}
        </div>
      ) : (
        <Home name={name}>Hola {props.name}</Home>
      )}
    </div>
  );
};

export default Name;

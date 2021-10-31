import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useUserContext } from "./../../contexts/Authcontentx";
import { Link, useHistory } from "react-router-dom";

function Signup() {
  const firenameRef = useRef();
  const lastnamRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { registerUser } = useUserContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [store, setstore] = useState([]);
  const history = useHistory();
  const addTodo = () => {
    setstore([
      ...store,
      {
        id: store.length + 1,
        firename: firenameRef.current.value,
        lastname: lastnamRef.current.value,

        email: emailRef.current.value,
      },
    ]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const name = firenameRef.current.value;
      const password = passwordRef.current.value;
      if (email && password && name) await registerUser(email, password, name);
    } catch (error) {
      console.log("nododkdk");
    }
  };
  // useEffect(() => {
  //   const locostroe = JSON.stringify(localStorage.getItem("mp"));
  //   if (locostroe) setstore(locostroe);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("mp", JSON.stringify(store));
  // }, [store]);
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onSubmit}>
            <Form.Group id="firename">
              <Form.Label>fireName</Form.Label>
              <Form.Control
                type="text"
                ref={firenameRef}
                name="displayName"
                required
              />
            </Form.Group>
            {/* <Form.Group id="lastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" ref={lastnamRef} required />
            </Form.Group> */}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
export default Signup;

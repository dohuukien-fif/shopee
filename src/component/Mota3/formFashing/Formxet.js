import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { FaStar, FaPlus } from "react-icons/fa";
import FormLisst from "./FomLisst";
const Formxet = ({ status }) => {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [todoss, setTodoSS] = React.useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const [img, setimg] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleChangeS = (e) => {
    setTodoSS(e.target.value);
  };
  const handlemail = (e) => {
    setemail(e.target.value);
  };
  const handlePhone = (e) => {
    setphone(e.target.value);
  };
  const handleimg = (e) => {
    setimg(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        name: todoss,
        phone: phone,
        email: email,
        img: img,
        completed: false,
      },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo(todos);
    setTodo("");
    setTodoSS("");
    setphone("");
    setemail("");
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };
  useEffect(() => {
    const locostroe = JSON.parse(localStorage.getItem("LOCO"));
    if (locostroe) setTodos(locostroe);
  }, []);
  useEffect(() => {
    localStorage.setItem("LOCO", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <span>
        1.Đánh giá
        <FaStar className="icon_m" />
        <FaStar className="icon_m" />
        <FaStar className="icon_m" />
        <FaStar className="icon_m" />
        <FaStar className="icon_m" />
        cho sản phẩm này :
      </span>
      <br></br>
      <span>2. Viết nhân xét của bạn vào bên dưới</span>
      {status && (
        <div className="container">
          <form onSubmit={onSubmit}>
            <br />
            <FormGroup>
              <Label for="exampleText"></Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                onChange={handleChange}
                value={todo}
                placeholder="Nhận xét về sản phẩm của bạn"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplename" className="laber-form">
                Thông tin cá nhân của bạn (<i>Thông tin của bạn được bảo mật</i>
                )
              </Label>
              <Input
                type="text"
                name="name"
                id="examplename"
                placeholder="with a placeholder"
                onChange={handleChangeS}
                value={todoss}
                required
                placeholder="Tên bạn"
              />
            </FormGroup>
            <div className="form-information">
              <FormGroup>
                <Input
                  type="text"
                  name="phone"
                  id="exampleEmail"
                  placeholder="Số điện thoại của bạn"
                  onChange={handlePhone}
                  value={phone}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="examplePassword"
                  placeholder="Email của bạn"
                  required
                  onChange={handlemail}
                  value={email}
                />
              </FormGroup>
            </div>
            <FormGroup>
              <Input
                type="file"
                name="file"
                id="examplefile"
                placeholder="Email của bạn"
                onChange={handleimg}
                src={img}
              />
            </FormGroup>
            <button type="submit" className="add-btn">
              Gửi nhận xét
            </button>
          </form>
        </div>
      )}
      <FormLisst
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        img={img}
      />
    </div>
  );
};
export default Formxet;

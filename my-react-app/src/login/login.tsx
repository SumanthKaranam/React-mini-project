import { Form, Input, Button, Card } from "antd";
import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
//import { loginUser } from "@/services/userService";

interface User {
  email: string;
  password: string;
  firstName: string;
}

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: FormValues) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user: User) =>
        user.email === values.email && user.password === values.password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      //   window.location.href = "/";
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="body">
      <Card className="login-card">
        <h1>/LiveRamp</h1>
        <h3>Log In to Console</h3>
        <Form
          name="normal_login"
          className="login-form"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            label="Password"
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item className="form-button">
            <Button
              style={{ background: "#32DB86" }}
              htmlType="submit"
              className="button"
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item className="form">
            <p>
              Don't have a subscription yet?
              <Link to="/register" className="customLink">
                Sign Up
              </Link>
            </p>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;

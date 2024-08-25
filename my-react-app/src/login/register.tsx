import { Form, Input, Button, Card, Row, Col } from "antd";
import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
//import { registerUser } from "@/services/userService";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: React.FC = () => {
  const onFinish = (values: FormValues) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(values);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "/login";
  };


  return (
    <div className="body">
      <Card className="register-card">
        <h1>Welcome to Console</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
                label="First Name"
              >
                <Input placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
                label="Last Name"
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            label="Email"
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain one lowercase character, one uppercase character, one number, and one special character.",
              },
            ]}
            label="Password"
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              { required: true, message: "Please confirm your password!" },
            ]}
            label="Confirm Password"
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
            <Button style={{ background: "#32DB86" }} htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            <p>
              Already have an account?
              <Link to="/login" className="customLink">
                Sign In
              </Link>{" "}
            </p>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterPage;

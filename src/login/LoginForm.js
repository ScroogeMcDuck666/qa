import React from "react";
import "antd/dist/antd.css";
import "./LoginForm.css";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../util/APIUtils";
import { ACCESS_TOKEN } from "../constants/index";

const LoginForm = (props) => {
  const handleSubmit = (values) => {
    console.log("Sending request ...");
    const loginRequest = Object.assign({}, values);
    console.log(loginRequest);
    login(loginRequest)
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        props.onLogin();
        console.log("response", response);
      })
      .catch((e) => {
        if (e.status === 401) {
          notification.error({
            message: "QA App",
            description:
              "Your Username or Password is incorrect. Please try again!",
          });
        } else {
          notification.error({
            message: "QA App",
            description:
              e.message || "Sorry! Something went wrong. Please try again!",
          });
        }
      });
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="usernameOrEmail"
        rules={[
          {
            required: true,
            message: "Please input your Username or Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username or Email"
        />
      </Form.Item>{" "}
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>{" "}
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox> Remember me </Checkbox>{" "}
        </Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password{" "}
        </a>{" "}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href=""> register now! </a>{" "}
      </Form.Item>{" "}
    </Form>
  );
};

export default LoginForm;

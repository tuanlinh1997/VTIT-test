import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { LoginModuleStyle } from "./index.style";
import useTrans from "@/lang";
import { GooglePlusOutlined, FacebookOutlined } from "@ant-design/icons";
import axios from "axios";
function Login() {
  const trans = useTrans();
  const [user, setUser] = useState();
  const handleLogin = async (values) => {
    const credentials = {
      username: values.username,
      password: values.password,
    };
    const user = await axios.post("/api/auth/login", credentials);
    if (user) {
      setUser(user.data.data);
    }
  };
  useEffect(() => {
    if (user) {
      console.log(user);
    }
    return () => {};
  }, [user]);

  return (
    <LoginModuleStyle>
      <div className="login-title">
        <h3>{trans.login.title}</h3>
        <div className="login-other">
          <span>
            Thành viên mới?{" "}
            <a href="" className="register">
              Đăng kí
            </a>{" "}
            tại đây
          </span>
        </div>
      </div>
      <div className="login-modal">
        <Form
          name="basic"
          //   wrapperCol={{ span: 20 }}
          onFinish={handleLogin}
          onFinishFailed={null}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <div className="form-login">
            <Form.Item
              label="Số điện thoại hoặc email"
              name="username"
              rules={[{ required: true, message: "Không được bỏ trống" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Không được bỏ trống" }]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          <div className="btn-login">
            <Form.Item>
              <Button className="btn-login" type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
            <span style={{ color: "#757575" }}>Hoặc, đăng nhập bằng</span>
            <Button className="btn-login btn-login-fb" type="primary">
              <FacebookOutlined />
              Facebook
            </Button>
            <Button className="btn-login btn-login-gg" type="primary">
              <GooglePlusOutlined />
              Google
            </Button>
          </div>
        </Form>
      </div>
    </LoginModuleStyle>
  );
}

export default Login;

import { Button, Form, Input } from "antd"
import { FC } from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { styled } from "styled-components"
import AutoMatelogo from "../../assets/AutoMateLogo"
import { Link, Navigate } from "react-router-dom"

const StyledForm = styled(Form)`
  max-width: 400px;
`
const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`
const PictureContainer = styled.div`
  width: 100%;
  background: url("../../assets/login.jpg") lightgray -494.377px 0px / 223.968% 130.664%
    no-repeat;
`
const LoginPage: FC = () => {
  return (
    <LoginPageContainer>
      <FormContainer>
        <h1>Login</h1>
        <StyledForm
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={() => <Navigate to="/" />}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Link to="/">Login</Link>
          </Form.Item>
        </StyledForm>
      </FormContainer>

      <PictureContainer></PictureContainer>
    </LoginPageContainer>
  )
}

export default LoginPage

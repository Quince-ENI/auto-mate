import { Button, Form, Input } from "antd"
import { FC } from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { styled } from "styled-components"
import AutoMatelogo from "../../assets/AutoMateLogo"
import { Link, Navigate } from "react-router-dom"
import { GoogleCredentialResponse, GoogleLogin } from "@react-oauth/google"
import jwt_decode from "jwt-decode"
import { getToken, storeToken } from "../../api/jwt"

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
  const onSuccess = (response: GoogleCredentialResponse) => {
    response.credential ? storeToken(response.credential) : getToken()
    return <Navigate to={"/"} />
  }
  const errorMessage = () => {
    console.log("kc")
  }

  return (
    <LoginPageContainer>
      <FormContainer>
        <h1>Login</h1>
        <GoogleLogin onSuccess={onSuccess} onError={errorMessage} />
      </FormContainer>

      <PictureContainer></PictureContainer>
    </LoginPageContainer>
  )
}

export default LoginPage

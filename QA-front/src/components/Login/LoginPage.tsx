import { Button, Form, Input } from "antd"
import { FC } from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { styled } from "styled-components"
import AutoMatelogo from "../../assets/AutoMateLogo"
import { Link, Navigate } from "react-router-dom"
import { GoogleCredentialResponse, GoogleLogin } from "@react-oauth/google"
import jwt_decode from "jwt-decode"
import { getToken, storeToken } from "../../api/jwt"
import { useDispatch } from "react-redux"
import { actions, useAutoMateDispatch } from "../../state/store"

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
const useOnSuccess = (response: GoogleCredentialResponse) => {
  const dispatch = useAutoMateDispatch()
  let jwtToken = getToken()
  if (response.credential) {
    storeToken(response.credential)
    jwtToken = getToken()
  }
  if (jwtToken) {
    dispatch(actions.setIsUserLogged(jwtToken))
  }
  return <Navigate to="/" replace={true} />
}
const errorMessage = () => {
  console.log("kc")
}

const LoginPage: FC = () => {
  return (
    <LoginPageContainer>
      <FormContainer>
        <h1>Login</h1>
        <GoogleLogin onSuccess={useOnSuccess} onError={errorMessage} />
      </FormContainer>

      <PictureContainer></PictureContainer>
    </LoginPageContainer>
  )
}

export default LoginPage

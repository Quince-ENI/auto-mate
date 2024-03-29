import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { getToken, storeToken } from '../../api/jwt';
import imgLogin from '../../assets/login.jpg';
import { getConnectedUserAsync } from '../../state/actions/user.actions';
import { actions, useAutoMateDispatch } from '../../state/store';

const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
const PictureContainer = styled.div`
  width: 100%;
  background: url(${imgLogin}) lightgray -494.377px 0px / 223.968% 130.664% no-repeat;
`;
function useOnSuccess(): (response: GoogleCredentialResponse) => void {
  const dispatch = useAutoMateDispatch();
  const navigate = useNavigate();
  return response => {
    let jwtToken = getToken();
    if (response.credential) {
      storeToken(response.credential);
      jwtToken = getToken();
    }
    if (jwtToken) {
      const decodeJwt: { email: string } = jwt_decode(jwtToken);
      const userMail = decodeJwt.email;
      dispatch(actions.setIsUserLogged(jwtToken));
      dispatch(getConnectedUserAsync(userMail));
      navigate('/home', { replace: true });
    }
  };
}
const errorMessage = (): void => {
  console.log('kc');
};

const LoginPage: FC = () => (
  <LoginPageContainer>
    <FormContainer>
      <h1>Login</h1>
      <GoogleLogin onSuccess={useOnSuccess()} onError={errorMessage} />
    </FormContainer>

    <PictureContainer></PictureContainer>
  </LoginPageContainer>
);

export default LoginPage;

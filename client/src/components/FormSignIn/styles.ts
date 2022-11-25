import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #3f4140;
`

export const Logo = styled.img`
  max-width: 400px;
`

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const PersonLabel = styled.label`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  margin-bottom: 16px;

  &::before {
    content: url('/img/person.svg');
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`

export const PasswordLabel = styled.label`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  margin-bottom: 16px;

  &::before {
    content: url('/img/lockn.svg');
    display: inline-block;
    width: 16px;
    height: 21px;
    margin-right: 10px;
  }
`

export const Input = styled.input`
  background-color: unset;
  border: unset;
  border: 1px solid #ffffff;
  padding: 10px;
  border-radius: 10px;

  &::placeholder {
    color: #ffffff;
  }
`

export const FormWrapper = styled.div`
  max-width: 542px;
`

export const SubmitButton = styled.button`
  border: unset;
  margin-top: 25px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #2b9e6e;
  border-radius: 10px;
  height: 48px;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.3s;

  > span {
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
  }

  &:hover {
    background-color: #2b9e6ed4;
  }
`

export const LoginSVG = styled.img`
  margin-right: 10px;
`

export const Signup = styled.p`
  margin-top: 18px;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  text-align: center;

  > a {
    color: #2b9e6e;
    text-decoration: underline;
  }
`

export const LogoAgency = styled.img`
  display: flex;
  margin: 0 auto;
  margin-top: 25px;
`

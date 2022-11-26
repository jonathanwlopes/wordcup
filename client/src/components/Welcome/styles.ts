import styled from 'styled-components'

export const Container = styled.div`
  padding: 48px 88px;
  background: #ffffff;
  border-radius: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 29px;
  color: #3f4140;
`

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  color: #3f4140;
  margin-top: 5px;
`

export const Img = styled.img`
  margin-top: 35px;
  max-height: 148px;
`

export const Button = styled.button`
  all: unset;
  margin-top: 35px;
  background: #2b9e6e;
  color: #ffffff;
  border-radius: 10px;
  width: 190px;
  height: 48px;

  font-weight: 400;
  font-size: 14px;
  line-height: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.3s;

  &:hover {
    background-color: #2b9e6ee6;
    cursor: pointer;
  }
`

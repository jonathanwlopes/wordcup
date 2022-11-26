import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #3f414074;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonCreate = styled.div`
  all: unset;
  color: #ffffff;
  background: #3f4140;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 48px;
  font-weight: 400;
  font-size: 14px;
  line-height: 13px;
  cursor: pointer;
  transition-duration: 0.3s;
  margin: 0 auto;
  margin-top: 48px;

  &:hover {
    background-color: #3f4140e6;
  }
`

export const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  margin: 20px 0;
`

import styled from 'styled-components'

export const Wrapper = styled.div<{ bg: string }>`
  width: 100%;
  height: 133px;
  background-image: ${({ bg }) => `url(${bg})`};
  background-repeat: round;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const AreaNation = styled.div`
  display: flex;
  gap: 18px;
  position: relative;

  &::after {
    content: '';
    width: 153px;
    height: 0;
    background-color: #fff;
    position: absolute;
    border: 1px solid #fff;
    bottom: -15px;
  }
`

export const Flag = styled.img`
  background-image: url(https://i.imgur.com/hG9hOSu.png);
  width: 49px;
  height: 34px;
`

export const Nation = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 29px;
  color: #fff;
`

export const Button = styled.button`
  border: 0;
  background-color: #3f4140;
  border-radius: 10px;
  color: #fff;
  padding: 17px 20px;
  display: flex;
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;
  line-height: 13px;

  &:hover {
    opacity: 0.8;
  }
`

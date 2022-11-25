import styled from 'styled-components'
import * as FigureStyles from 'components/Figure/styles'

export const Container = styled.div``

export const Center = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const WrapperFigures = styled.div`
  display: flex;
  align-items: center;

  ${FigureStyles.Content} {
    max-width: 250px;
  }
`

export const InfoAlbum = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WrapperText = styled.div``

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 29px;
  color: #3f4140;
  display: flex;
  flex-direction: column;

  &:after {
    content: '';
    margin-top: 15px;
    margin-bottom: 10px;
    display: inline-block;
    border: 1px solid #3f4140;
    width: 153px;
  }
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: #3f4140;
`

export const ButtonAlbum = styled.button`
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

  &:hover {
    background-color: #3f4140e6;
  }
`

export const WinFigures = styled.button``

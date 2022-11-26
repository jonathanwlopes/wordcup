import styled from 'styled-components'
import * as FigureStyles from 'components/Figure/styles'
import css from 'styled-jsx/css'

export const Container = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    width: 60px;
    height: 60px;
    background-color: #ffffff;
    border-radius: 30px;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &:before {
      content: url('/img/arrow.svg');
      padding: 20px;
    }
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;

    &:before {
      transform: rotate(180deg);
    }
  }

  .swiper-wrapper {
    padding: 20px 0;
  }

  .swiper-slide {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 29px;
    color: #ffffff;
    height: 100%;
  }

  .swiper {
    position: relative;
    max-width: 1200px;
  }
`

export const WrapperSwiper = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ bg }) => bg});
  background-color: green;
  height: 133px;
`

export const Center = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const WrapperFigures = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  gap: 50px;

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

export const WinFigures = styled.button`
  all: unset;
  display: block;
  margin: 0 auto;
  margin-top: 60px;
  background: #2b9e6e;
  border-radius: 10px;
  padding: 17px 20px;
  width: 190px;
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 13px;
  transition-duration: 0.3s;

  &:hover {
    cursor: pointer;
    background: #2b9e6ee6;
  }
`
export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapperFigure = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 50px;
`

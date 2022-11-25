import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(https://i.imgur.com/1rI8N4C.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Image = styled.img`
  width: 242px;
  height: 364px;
  object-fit: cover;
  filter: brightness(1) opacity(0.8);
`

export const Caption = styled.figcaption`
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 1rem;
`

import styled from 'styled-components'

export const Area = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const Image = styled.img`
  width: 250px;
  height: 344px;
`

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #af7cdd 0%, #2dd18c 100%);
  width: 250px;
  height: 344px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(
    90deg,
    #009c3b 0%,
    #ffdf00 19.06%,
    #009c3b 47.71%
  );
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  height: 57px;
`

export const Name = styled.p`
  font-size: 20px;
  line-height: 19px;
  color: #ffffff;
  font-weight: 700;
`

export const Position = styled.p`
  margin-top: 5px;
  font-size: 16px;
  line-height: 15px;
  color: #ffffff;
`

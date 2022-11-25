import styled from 'styled-components'

export const Wrapper = styled.header`
  background-color: #3f4140;
  padding: 10px;
`

export const Center = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url('/img/topo.png');
  background-position: -35rem 0rem;
`

export const Logo = styled.img`
  max-height: 68px;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`

export const Welcome = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  margin-right: 50px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    background-image: url('/img/profile.svg');
    background-position: center center;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`

export const ListMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 50px;
  cursor: pointer;
`

export const ItemMenu = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const IconHome = styled.div`
  background-image: url('/img/home.svg');
  background-position: center center;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
`

export const IconSettings = styled.div`
  background-image: url('/img/settings.svg');
  background-position: center center;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
`

export const IconQuit = styled.div`
  background-image: url('/img/quit.svg');
  background-position: center center;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
`

export const TextMenu = styled.span`
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 13px;
`

export const Signout = styled.button`
  all: unset;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 13px;
`

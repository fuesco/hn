import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

const HEIGHT = 48;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.background};
  height: ${HEIGHT}px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  box-shadow: 0 1px 0 0 black;
  position: fixed;
  top: 0;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tablet} {
    max-width: 96%;
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const Icon = styled.div`
  margin-left: 12px;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.text}; 
`;

export const Logo = styled.img`
  width: 64px;
  margin-right: 24px;
`;

export const Brand = styled.h4`
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'IBM Plex Sans Condensed', sans-serif; 
`;

export const Spacer = styled.div`
  height: ${HEIGHT}px;
`;

export const ExternalLink = styled.a`
  display: flex;
  color: #edf0f2;
  align-items: center;
  justify-content: center;
`;
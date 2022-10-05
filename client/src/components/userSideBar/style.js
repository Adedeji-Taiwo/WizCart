import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
  position: absolute;
  z-index: 1;

  @media (max-width: 570px) {
        top: 20%;
    }

  .active {
    border-right: 4px solid ${props => props.theme.white};

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.eerieBlack};
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: ${props => props.theme.white};
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const SidebarContainer = styled.div`
  background-color: ${props => props.theme.eerieBlack};
  width: 3.5rem;
  height: 400px;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;


export const SlickBar = styled.ul`
  color:  ${props => props.theme.white};
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  background-color: ${props => props.theme.eerieBlack};

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

export const Item = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.white};
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;


  &:hover {
    border-right: 4px solid ${props => props.theme.white};

    svg {
    color:  ${props => props.theme.cultured};
    }
  }

  svg {
    width: 1.2rem;
    height: auto;
    color: ${props => props.theme.white};
  }
`;

export const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
  font-size:  ${props => props.theme.fontxs};
`;

export const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;

  padding: 0.5rem 1rem;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: ${props => props.theme.eerieBlack};
  color:  ${props => props.theme.white};
  z-index: 1;

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid ${props => props.theme.cultured};
      padding: 2px;
    }
  }
`;

export const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    display: inline-block;
    color: ${props => props.theme.white};
    font-size:  ${props => props.theme.fontxs};
  }

  span {
    font-size: 0.7rem;
    text-decoration: none;
    color: ${props => props.theme.sonicSilver};
    font-size:  ${props => props.theme.font3xs};

   
  }
`;

export const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  svg {
    width: 60%;
    height: auto;
    color:  ${props => props.theme.primaryLight};
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.6;
    }
  }
`;
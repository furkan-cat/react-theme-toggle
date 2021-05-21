import React, { useState } from "react";

import Modal from "./Modal";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

// Change Theme
const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
`;

// Modal
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const Button = styled.button`
  min-width: 150px;
  padding: 14px 28px;
  border-radius: 6px;
  color: #fff;
  background: #2c363c;
  font-size: 24px;
  cursor: pointer;
  border: none;
`;

function Splash(props) {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <Page>
      <Container>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
        <Title>Click Here to Change Theme</Title>
        <TagLine>Level up your web development skills!</TagLine>
        <ButtonBox>
          <Button onClick={openModalHandler}>Click Modal</Button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </ButtonBox>
      </Container>
    </Page>
  );
}

export default Splash;

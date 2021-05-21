import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #141414;
  display: flex;
  justify-content: center;
  height: 35vh;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  align-items: center;
  line-height: 1.8;
  color: #141414;
  width: 75%;
  h1 {
    text-align: center;
  }
  p {
    margin-bottom: 1rem;
  }
  button {
    text-align: center;
    padding: 14px 28px;
    border-radius: 6px;
    color: #fff;
    background: #2c363c;
    font-size: 24px;
    cursor: pointer;
    border: none;
  }
`;

const Modal = (props) => {
  return (
    <>
      {props.showModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <h1>Dealing with nature deficit</h1>
              <p>
                Seven out of 10 people admit they’re losing touch with nature.
                And more than a third of parents admit they could not teach
                their own children about British wildlife.
              </p>
              <button>Join Now</button>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;

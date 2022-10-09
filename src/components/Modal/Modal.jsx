import { Overlay, ModalDiv } from './Modal.styled';

export const Modal = ({ modalUrl }) => {
  return (
    <Overlay>
      <ModalDiv>
        <img src={modalUrl} alt="Modal new Photo" />
      </ModalDiv>
    </Overlay>
  );
};

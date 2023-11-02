import "./BasicModal.scss";
import { Modal, Icon } from "semantic-ui-react";

const BasicModal = ({ show, onClose, title, size, children }) => {
  return (
    <Modal open={show} size={size} onClose={onClose} className="basic-modal">
      <Modal.Header>
        <div />
        <span>{title}</span>
        <Icon name="close" onClick={onClose} link />
      </Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

BasicModal.defaultProps = {
  size: "tiny",
};

export default BasicModal;

import { Modal } from "react-bootstrap";
import { ModalProps } from "../modal.d";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DefaultModal.scss";
import Icon from "../../Icon";
import Button from "../../Button";

const DefaultModal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    onClose,
    hideButton = false,
    onButtonClick,
    buttonText,
    isButtonLoading,
  } = props;

  return (
    <Modal show={isOpen} onHide={() => onClose()}>
      <div className="default-modal">
        <div className="icon" onClick={() => onClose()}>
          <Icon icon="close" />
        </div>
        {children}
        {!hideButton && (
          <div onClick={() => onButtonClick?.()}>
            <Button
              className="close--button"
              text={buttonText ? buttonText : "Okay"}
              isLoading={isButtonLoading}
              isLoadingText="Please wait..."
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default DefaultModal;

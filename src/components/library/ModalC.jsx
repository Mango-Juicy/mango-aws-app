import { Modal } from 'react-bootstrap';
import ButtonC from './ButtonC';


const ModalC = ({
  title = 'title',
  content = <div></div>,
  size = 'lg',
  showModal = false,
  labelButtonSave = 'Salva',
  isPrimaryButton = true,
  isSecondaryButton = true,
  handleModalClose = () => { },
  handleModalSave = () => { }
}) => {
const footerClassName = (isPrimaryButton && isSecondaryButton) ? 'justify-content-between' : 'justify-content-end';

  return (
    <Modal show={showModal} onHide={handleModalClose} size={size} dialogClassName=''>
      <div className='c-background text-white'>
        <Modal.Header closeButton>
          <Modal.Title className='text-white'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {content}
        </Modal.Body>
        <Modal.Footer className={footerClassName}>
          {isPrimaryButton &&
            <ButtonC
              label='CLOSE'
              variant='c-background'
              onClick={handleModalClose}
            ></ButtonC>
          }
          {isSecondaryButton &&
            <ButtonC
              label={labelButtonSave}
              onClick={handleModalSave}
            ></ButtonC>
          }
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default ModalC;
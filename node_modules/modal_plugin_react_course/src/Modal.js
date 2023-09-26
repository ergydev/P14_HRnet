import PropTypes from 'prop-types';

const Modal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        {/* Modal content */}
        <h2 className="modal-content__title">Modal Title</h2>
        <p className="modal-content__text">Modal Message.</p>
        <button onClick={onClose} className="modal-content__button">Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

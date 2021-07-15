import './Modal.scss';

const Modal = ({children, title, id}) => {
    return (
        <div className="modal fade" id={id} tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" style={{width: '100%'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

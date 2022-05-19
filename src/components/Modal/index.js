import ReactDom from 'react-dom';
import './Modal.css';

export function Modal({ children, setModalOpen }) {

    const onClickCloseModal = () => {
        setModalOpen(false);
    }

    return ReactDom.createPortal(
        <section className='backgroundModal' onClick={ () => { onClickCloseModal() } }>
            <section className="modal-content">
              <span className="close" onClick={ () => { onClickCloseModal() } }>&times;</span>
              { children }
            </section>            
        </section>,
        document.getElementById('modal')
    );
}
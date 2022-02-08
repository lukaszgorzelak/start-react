import './modal.scss';
import Divider from '../../components/divider/Divider';
import avatar from '../../img/avatar.svg';

const Modal = (props) => {

        return (
            <>
                <div className="modal">
                    <div className="modal__header" onClick={props.handleCloseModal}>
                        <span className="btn__close" type="button" aria-label="Close">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                    <h2>Modal</h2>
                    <Divider line="divider__dark" star="star__dark"/>
                    <img src={avatar} className="portfolio__img" alt=""></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                </div>
            </>
        );
    }
  
  export default Modal;
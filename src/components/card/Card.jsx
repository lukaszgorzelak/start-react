import './card.scss';
import Modal from '../modal/Modal';
import { useState } from "react";

const Card = (props) => {

    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(!open);
    }

    const [close, setClose] = useState(false);

    const handleCloseModal = () => {
        setClose(!close);
        setOpen(!open);
    }

    return (
        <>
            <div className="portfolio__card">
                <img src={props.photo} className="portfolio__img" alt=""></img>
                <div className="portfolio__hover" onClick={handleOpenModal}>
                    <div className="portfolio__plus">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            {open && <Modal handleCloseModal={handleCloseModal}/>}
        </>
    );
  };
  
  export default Card;
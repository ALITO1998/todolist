import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import Styles from "./modal.module.css";

const BackDrop = ({ close, show }) => {
    return (<div onClick={close} className={`${Styles.backDrop} ${show ? Styles.showBackDrop : null}`}></div>);
}



const Overlay = ({ children, show }) => {
    return (<div className={`${Styles.overLay} ${show ? Styles.showOverLay : null}`}>
        {children}
    </div>);
}

const Modal = ({ children, show, closeModel }) => {

    return (<Fragment>
        {createPortal(
            <Fragment>
                <BackDrop close={closeModel} show={show} />
                <Overlay show={show}>{children}</Overlay>
            </Fragment>,
            document.getElementById('modal')
        )}
    </Fragment>);
}

export default Modal;
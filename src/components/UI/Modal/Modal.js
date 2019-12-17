import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.css'

const modal = (props) => (
    <div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        {props.childrem} 
        <div className='Modal' 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
        </div>
    </div>
);

export default modal;
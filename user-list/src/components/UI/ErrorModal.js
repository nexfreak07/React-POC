// This is very imp file which uses backdrop and a error modal
import React from 'react';
import Card from './Card';
import classes from './ErrorModal.module.css';
import Button from './Button';

const ErrorModal = (props) => {
    return(<div >

        {/* How to Add Backdrop - You cant interact with background */}
        <div className={classes.backdrop} onClick={props.onConfirm}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>

        </Card>
    </div>);
    
};

export default ErrorModal;
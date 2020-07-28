import React from 'react';
import d from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog}>
                    Sergey
                </div>
                <div className={d.dialog}>
                    Evgeny
                </div>
                <div className={d.dialog}>
                    Sergey
                </div>
                <div className={d.dialog}>
                    Dima
                </div>
                <div className={d.dialog}>
                    Vadim
                </div>
                <div className={d.dialog}>
                    Dima
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>
                    Hi!
                </div>
                <div className={d.message}>
                    How is your IT?
                </div>
                <div className={d.message}>
                    ok!
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

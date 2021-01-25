import React from "react";
import styles from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.svg'

let Preloader = () => {
    return <div>
        <img src={preloader} alt={'altername'} />
    </div>
}

export default Preloader;

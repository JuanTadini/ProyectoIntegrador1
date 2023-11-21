
import React, { useState } from 'react';
import styles from './ButtonForm.module.css';

const ButtonForm = ({name, handleClick}) => {

return (
    <>
        <button className={styles['form-button']} onClick={handleClick}>{name}</button>
    </>
  )
}

export default ButtonForm
import React from 'react';
import styles from './header.module.css';
import { useState } from 'react';

const Header = () => {
  // const [value, setValue] = useState(0);
  // const [value, setValue] = useState("");
  const [value, setValue] = useState(0);
  
  const valueHandler = () => {
    setValue(value + 1);
    // setValue("Updated");
    // console.log(value);
  }

  const subtracthandler = () => {
    setValue(value - 1);
  }
  
  return (
    <div className={styles.header}>
      <p>This is a Paragraph</p>
      <button onClick={valueHandler}>Addition</button>
      <button onClick={subtracthandler}>Subtract</button>
    </div>
  );
};

export default Header
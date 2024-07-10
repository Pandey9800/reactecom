import React from 'react';
import styles from './header.module.css';
import { useState, useEffect } from 'react';

const Header = () => {
  // const [value, setValue] = useState(0);
  // const [value, setValue] = useState("");
  const [value, setValue] = useState(0);
  const [statement, setstatement] = useState(true);
  
  const valueHandler = () => {
    setValue(value + 1);
    // setValue("Updated");
    // console.log(value);
  };

  const subtracthandler = () => {
    setValue(value - 1);
  };

  const statementhandler = () => {
    setstatement(!statement);
    console.log();
  };

  useEffect(() => {
    console.log("Changing the Data");
  });
  
  return (
    <div className={styles.header}>
      <p>This is a Paragraph</p>
      <button onClick={valueHandler}>Addition</button>
      <button onClick={subtracthandler}>Subtract</button>
      <h1>{statement}</h1>
    </div>
  );
};

export default Header
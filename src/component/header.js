import React, { useState, useEffect } from 'react'

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(getFormattedDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getFormattedDateTime());
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header style={styles.header}>
      <marquee style={styles.marquee}>
      <b> Date And Time </b> : - <span style={styles.date}>{currentDateTime}</span>
      </marquee>
    </header>
  );
};


const getFormattedDateTime = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const year = now.getFullYear();
  const time = now.toLocaleTimeString(); 

  return `${day}/${month}/${year} ${time}`;
};

const styles = {
  header: {
    backgroundColor: '#00FFFF',
    padding: '10px',
    textAlign: 'center',
  },
  marquee: {
    fontSize: '18px',
    color: 'green',
  },
  date: {
    color: 'red',
  },
};

export default Header;

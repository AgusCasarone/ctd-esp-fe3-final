import React from 'react';
import { useContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { theme } = useContextGlobal();
  return (
    <footer className={theme.color}>
      <div>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
      </div>
    </footer>
  )
}

export default Footer

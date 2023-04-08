import React from 'react';
import { useContextGlobal } from "./utils/global.context";
import DH from '../images/DH.png'

const Footer = () => {
  const { theme } = useContextGlobal();
  return (
    <footer className={theme.color}>
      <div>
        <p>Powered by</p>
        <img src={DH} alt='DH-logo' />
      </div>
    </footer>
  )
}

export default Footer

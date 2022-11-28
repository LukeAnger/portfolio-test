import React from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
const {useState} = React;


const Navbar = (props) => {

  const[dropdown, setDropdown] = useState(false)
  const navbarDropdownHandler = () => {
    setDropdown(!dropdown)

  }

  if (dropdown) {
    return (
      <motion.div className='navbar-container'>

        <motion.div
        className='navbar-title'
        onClick={navbarDropdownHandler}
        >Navbar!</motion.div>

        <button onClick={e => {
          event.preventDefault();
          window.location.replace('/#experience')
        }}>Resume</button>

        <button onClick={e => {
          event.preventDefault();
          window.location.replace('/#about')
        }}>About Me</button>

        <button onClick={e => {
          event.preventDefault();
          window.location.replace('/#projects')
        }}>Projects</button>

        <button onClick={e => {
          event.preventDefault();
          window.location.replace('/#tutorials')
        }}>Tutorials</button>

        <button onClick={e => {
          event.preventDefault();
          window.location.replace('/#contact')
        }}>Contacts</button>

      </motion.div>
    )
  } else {
    return(

    <motion.div
    className='navbar-container'
    onClick={navbarDropdownHandler}
    >Navbar!</motion.div>

    )
  }


};

export default Navbar;

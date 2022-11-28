import React from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
const {useState} = React;


const AboutMe = ({voiceCommand, animating, onAnimate}) => {


    if (animating) {
      return (
        <motion.div className='aboutme-container'>
      <div className='title-aboutme' onClick={e => {
            event.preventDefault();
            onAnimate()
          }}>About Me</div>
      <motion.div className='aboutme-button' onClick={e => {
            event.preventDefault();
            onAnimate()
          }}></motion.div>
          <motion.div className='aboutme-hex4' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:0, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex3' initial={{ scale: 0 }} animate={{scale:1}} initial={{ scale: 0 }} transition={{delay:0.3, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex2' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:0.6, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex1' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:0.9, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex6' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:0.6, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex5' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:0.3, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill1' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:1.2, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill2' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:1.2, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill3' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:1.2, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill4' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:1.2, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill5' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:1.2, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill6' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:1.2, duration:0.3}}></motion.div>
        </motion.div>
      )
    } else if (!animating) {
      return (
        <motion.div className='aboutme-container'>
      <div className='title-aboutme' onClick={e => {
            event.preventDefault();
            onAnimate()
          }}>About Me</div>
      <motion.div className='aboutme-button' onClick={e => {
            event.preventDefault();
            onAnimate()
          }}></motion.div>
          <motion.div className='aboutme-hex4' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:1.2, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex3' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0.9, duration:0.6}}></motion.div>
          <motion.div className='aboutme-hex2' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0.6, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex1' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0.3, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex6' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0.6, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex5' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0.9, duration:0.3}}></motion.div>

          <motion.div className='aboutme-hex-fill1' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill2' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill3' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill4' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill5' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0, duration:0.3}}></motion.div>
          <motion.div className='aboutme-hex-fill6' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0, duration:0.3}}></motion.div>
        </motion.div>
      )
    }
};

export default AboutMe;

import React from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
import {useSpeechRecognition} from 'react-speech-kit';
const {useState} = React;



const Projects = ({voiceCommand, animating, onAnimate}) => {

  if (animating) {
    return (
      <motion.div id='projects' className='projects-container'>
        <div className='title-projects' onClick={e => {
          event.preventDefault();
          onAnimate()
        }}>Projects</div>
        <motion.div className='projects-button' onClick={e => {
          event.preventDefault();
          onAnimate()
        }}></motion.div>
        <motion.div className='projects-hex1' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:0, duration:0.3}}></motion.div>
        <motion.div className='projects-hex2' initial={{ scale: 0 }} animate={{scale:1}} initial={{ scale: 0 }} transition={{delay:0.3, duration:0.3}}></motion.div>
        <motion.div className='projects-hex3' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:0.6, duration:0.3}}></motion.div>
        <motion.div className='projects-hex4' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:0.9, duration:0.3}}></motion.div>
        <motion.div className='projects-hex5' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:1.2, duration:0.3}}></motion.div>
        <motion.div className='projects-hex6' initial={{ scale: 0 }} animate={{scale:1}} transition={{delay:1.5, duration:0.3}}></motion.div>
      </motion.div>
    )
  } else if (!animating) {
    return (
      <motion.div id='projects' className='projects-container'>
        <div className='title-projects' onClick={e => {
          event.preventDefault();
          onAnimate()
        }}>Projects</div>
        <motion.div className='projects-button' onClick={e => {
          event.preventDefault();
          onAnimate()
        }}></motion.div>
        <motion.div className='projects-hex1' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:1.5, duration:0.3}}></motion.div>
        <motion.div className='projects-hex2' initial={{ scale: 0 }} animate={{scale:0}} initial={{ scale: 0 }} transition={{delay:1.2, duration:0.3}}></motion.div>
        <motion.div className='projects-hex3' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0.9, duration:0.3}}></motion.div>
        <motion.div className='projects-hex4' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0.6, duration:0.3}}></motion.div>
        <motion.div className='projects-hex5' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0.3, duration:0.3}}></motion.div>
        <motion.div className='projects-hex6' initial={{ scale: 0 }} animate={{scale:0}} transition={{delay:0, duration:0.3}}></motion.div>
      </motion.div>
    )
  }


};

export default Projects;

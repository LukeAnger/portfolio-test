import React from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
const {useState} = React;


const Random = (props) => {


  return(

    <motion.div id='experience' className='random-container'>
      <motion.div className='random-button'></motion.div>
    </motion.div>

    )

};

export default Random;

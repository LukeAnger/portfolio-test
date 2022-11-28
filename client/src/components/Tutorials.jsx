import React from 'react';
import axios from 'axios';
import {motion, onHover} from 'framer-motion'

const {useState} = React;


const Tutorials = (props) => {


  return(
    <div>

      <motion.div id='tutorials' className='tutorials-container'>
        <motion.div className='tutorials-button'></motion.div>
      </motion.div>

    </div>

    )

};

export default Tutorials;

import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.jsx'
import AboutMe from './components/AboutMe.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
import Resume from './components/Resume.jsx'
import Random from './components/Random.jsx'
import Tutorials from './components/Tutorials.jsx'
import {motion} from 'framer-motion'
import {useSpeechRecognition} from 'react-speech-kit';
const {useState} = React;
let APIKEY = '?apiKey=431f136ab8cc4ba4b6e82ba44b8a3a57'

const App = (props) => {
  const [value, setValue] = useState('');
  const [animateProjects, setAnimateProjects] = useState(false);
  const [animateAboutMe, setAnimateAboutMe] = useState(false);
  const [animateTutorials, setAnimateTutorials] = useState(false);
  const [animateResume, setAnimateResume] = useState(false);
  const [animateContact, setAnimateContact] = useState(false);
  const [animateRandom, setAnimateRandom] = useState(false);
  const onAnimateProjects = () => {
    setAnimateProjects(!animateProjects)
  }
  const onAnimateAboutMe = () => {
    setAnimateAboutMe(!animateAboutMe)
  }
  const onAnimateTutorials = () => {
    setAnimateTutorials(!animateTutorials)
  }
  const onAnimateResume = () => {
    setAnimateResume(!animateResume)
  }
  const onAnimateContact = () => {
    setAnimateContact(!animateContact)
  }
  const onAnimateRandom = () => {
    setAnimateRandom(!animateRandom)
  }
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      if (result === 'projects') {
        setAnimateProjects(!animateProjects)
      } else if (result === 'about me') {
        setAnimateAboutMe(!animateAboutMe)
      } else if (result === 'tutorials') {
        setAnimateTutorials(!animateTutorials)
      } else if (result === 'resume') {
        setAnimateResume(!animateResume)
      } else if (result === 'contact') {
        setAnimateContact(!animateContact)
      } else if (result === 'random') {
        setAnimateRandom(!animateAboutMe)
      }
    }
  })


  return(

    <motion.div className="app-container">
      <button className='button' onMouseDown={listen} onMouseUp={stop}>Activate Microphone</button>
      <Navbar />
      <motion.div className='hex-menu'>

        <AboutMe voiceCommand={value} animating={animateAboutMe} onAnimate={onAnimateAboutMe}/>
        <Resume voiceCommand={value} animating={animateResume} onAnimate={onAnimateResume}/>
        <Tutorials voiceCommand={value} animating={animateTutorials} onAnimate={onAnimateTutorials}/>
        <Projects voiceCommand={value} animating={animateProjects} onAnimate={onAnimateProjects}/>
        <Contact voiceCommand={value} animating={animateContact} onAnimate={onAnimateContact}/>
        <Random voiceCommand={value} animating={animateRandom} onAnimate={onAnimateRandom}/>
      </motion.div>


    </motion.div>


    )

};

export default App;



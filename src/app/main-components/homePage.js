"use client";
import React from 'react'
import CustomBg from '../components/CustomBg'
import { FlipWords } from '../components/HeroSection'
import { motion } from 'framer-motion';

const HomePage = () => {
  const helloWords = [
    "Hello", // English
    "Bonjour", // French
    "Ciao", // Italian
    "こんにちは", // Japanese
    "Merhaba", // Turkish
    "Hej", // Swedish
  ];

  return (
    <div>
      <CustomBg />
      <FlipWords words={helloWords} duration={1500} className={"herotext"} />
      <motion.div animate={{
        y:[0,10,0]
      }} transition={{
        duration:2.5,
        repeat: Infinity,
        ease: [0, 0.71, 0.2, 1.01],
        
      }} className='home-scroll-arrow-container'>
      <i className="ri-arrow-down-wide-fill" id='home-scroll-arrow'></i>
      </motion.div>
    </div>
  )
}

export default HomePage

import { useState } from 'react'
import Header from './components/Header';
import HeroSection from './components/Hero';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import ProjectsComponent from './components/ProjectsComponent';
import Contact from './components/Contact';
import { AiFillLinkedin, AiFillGithub,  } from 'react-icons/ai';
import { FaMedium } from 'react-icons/fa6';


function App() {

  return (
      <div className='bg-gradient-to-b from-[#DDF2FD] to-[#C9D6DF]'>
        <Header />

        <main>
          <HeroSection />
          <AboutMe />
          <Technologies />
          <ProjectsComponent />
          <Contact />
        </main>
        <footer>
          <div className='container mx-auto px-12 py-20 text-center flex flex-col gap-2'>
            <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0'>
              <h2>Created by Gustavo Farias | 2023 </h2>
              <div className='flex flex-row'>
                <a href='https://www.linkedin.com/in/gustavo-farias29/' target="_blank">
                  <AiFillLinkedin className='w-8 h-8'/>
                </a> 
                <a href="https://github.com/ggfarias" target="_blank">
                  <AiFillGithub className='w-8 h-8 mx-4'/>
                </a>
                <a href="https://medium.com/@gustavocgf" target="_blank">
                  <FaMedium className='w-8 h-8'/> 
                </a>
              </div>
            </div>
            <hr className='bg-[#164863] h-0.5'/>
            <p>Made with: React | TailwindCSS | Styled Components</p>
          </div>
        </footer>
      </div>
  )
}

export default App

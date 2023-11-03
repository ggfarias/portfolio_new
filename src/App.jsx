import { useState } from 'react'
import Header from './components/Header';
import HeroSection from './components/Hero';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';


function App() {

  return (
      <div className='bg-[#faedcd]'>
        <Header />

        <main>
          <HeroSection />
          <AboutMe />
          {/*<section>
            <h1>About Me</h1>
          </section>
          <section>
            <h1>Technologies</h1>
          </section>
          <section>
            <h1>Projects</h1>
          </section>
          <section>
            <h1>Contact</h1>
          </section> */}
        </main>
        <footer>
          <div className='container mx-auto px-12 py-20 text-center flex flex-col gap-4'>
            <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0'>
              <h2>Created by Gustavo Farias | 2023 </h2>
              <div>Linkedin icon | Github icon</div>
            </div>
            <hr className='to-black'/>
            <p>Made with: React | TailwindCSS | Styled Component</p>
          </div>
        </footer>
      </div>
  )
}

export default App

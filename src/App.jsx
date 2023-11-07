import { useState } from 'react'
import Header from './components/Header';
import HeroSection from './components/Hero';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';


function App() {

  return (
      <div className='bg-[#DDF2FD]'>
        <Header />

        <main>
          <HeroSection />
          <AboutMe />
          <Technologies />
          {/*<section>
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
            <hr className='bg-[#164863] h-1 '/>
            <p>Made with: React | TailwindCSS | Styled Components</p>
          </div>
        </footer>
      </div>
  )
}

export default App


import styled from "styled-components";
import heroImage from '../../assets/images/hero-image.svg';
import { FaMedium } from 'react-icons/fa6';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


const StyledHeroSection = styled.section`

    h1 {
        font-size: 4rem;
        text-align: left;
        font-weight: 600;
    }

    h2 {
        font-size: 2.5rem;
        text-align: left;
        font-weight: 500;
    }

    h3 {
        font-size: 2rem;
        text-align: left;
        font-weight: 400;
    }

    div {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        gap: 1.125rem;
    }
`

const HeroSection = () => {
    return (
        <div className="container mx-auto px-20 py-36">
            <StyledHeroSection className="text-center lg:text-left flex flex-row my-auto items-center justify-between">
                <section>
                    <h3>Hi, I am</h3>
                    <h1>Gustavo Farias</h1>
                    <h2>Front-end Developer</h2>

                    
                    <div>
                        <a href='https://www.linkedin.com/in/gustavo-farias29/' target="_blank"> <AiFillLinkedin className="w-20 h-20 max-w-[3rem] max-h-[3rem] hover:scale-125 duration-200"/></a>
                        <a href="https://github.com/ggfarias" target="_blank"><AiFillGithub className="w-20 h-20 max-w-[3rem] max-h-[3rem] hover:scale-125 duration-200"/></a>
                        <a href="https://medium.com/@gustavocgf" target="_blank"><FaMedium className="w-20 h-20 max-w-[3rem] max-h-[3rem] hover:scale-125 duration-200" /></a>
                    </div>
                </section>
                <section>
                    <img src={heroImage} alt="hero image" className="max-w-2xl max-h-2xl" />
                </section>
                

            </StyledHeroSection>
        </div>
    )
}

export default HeroSection; 

import styled from "styled-components";
import linkedinIcon from '../../assets/images/linkedin-icon.svg';
import linkedinIcon2 from '../../assets/images/linkedin-logo.png';
import githubIcon from '../../assets/images/github-icon.svg';
import heroImage from '../../assets/images/hero-image.svg';


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
        gap: 1rem;
    }

    div img {
        max-width: 3rem;
        max-height: 3rem;
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
                        <a href='https://www.linkedin.com/in/gustavo-farias29/' target="_blank"><img src={linkedinIcon2} alt="LinkedIn" className="w-20 h-20"/></a>
                        <a href="https://github.com/ggfarias" target="_blank"><img src={githubIcon} alt="GitHub" className="w-20 h-20" /></a>
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
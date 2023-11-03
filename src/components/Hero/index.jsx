
import styled from "styled-components";

const StyledHeroSection = styled.section`

    h1 {
        font-size: 4rem;
        text-align: left;
        font-weight: 600;
    }

    h2 {
        font-size: 2rem;
        text-align: left;
        font-weight: 500;
    }

    h3 {
        font-size: 1.5rem;
        text-align: left;
        font-weight: 400;
    }

    div {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
`

const HeroSection = () => {
    return (
        <div className="container mx-auto px-20 py-36">
            <StyledHeroSection className="text-center lg:text-left flex flex-col my-auto ">
                <h3>Hi, I am</h3>
                <h1>Gustavo Farias</h1>
                <h2>Front-end Developer</h2>

                
                <div>
                    {/* <a href=""><img src="" alt="" /></a> */} <p>Linkedin</p>
                    {/* <a href=""><img src="" alt="" /></a> */} <p>GitHub</p>
                    {/* <a href=""><img src="" alt="" /></a> */} <p>Medium</p>
                </div>
            </StyledHeroSection>
        </div>
    )
}

export default HeroSection; 
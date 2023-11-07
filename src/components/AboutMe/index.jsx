import styled from "styled-components";
import personalImage from '../../assets/images/img-portfolio.jpeg';

const StyledAboutMe = styled.section`
    display: flex;

    .text_container {
        max-width: fit-content;
        padding-right: 2rem;
    }

    h1 {
        font-size: 3rem;
        text-align: left;
        font-weight: 600;
        padding-bottom: 1rem;
    }

    p {
        font-size: 1.125rem;
    }
    p a {
        text-decoration: underline;
    }
`

const AboutMe = () => {
    return (
        <div className="container mx-auto px-20 py-36">
            <StyledAboutMe>
                <div className="text_container">
                    <h1>About Me</h1>
                    <p>I'm a self taught Software Developer, who seeks to solve real world problems with technology. I'm currently learning about Web Development with emphasis on Front-end, and creating responsive web apps.</p>
                    <br />
                    <p>I have previous work experience with Project Management, Team Leadership and Tech Recruiting, when I worked in a Scale-up startup for almost 3 years. Check out my <a href='https://www.linkedin.com/in/gustavo-farias29/' target="_blank">LinkedIn</a> for more info.</p>
                </div>
                

                <img src={personalImage} alt="Gustavo Farias" className="bg-[#427D9D] p-4 mx-auto w-72 md:w-80 xl:w-96 rounded-md shadow-2xl hover:scale-105 duration-200"/>
            </StyledAboutMe>
        </div>
    )
}

export default AboutMe;
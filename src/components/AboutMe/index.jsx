import styled from "styled-components";
import personalImage from '../../assets/images/img-portfolio.jpeg';

const StyledAboutMe = styled.section`
    display: flex;

    .text_container {

    }

    h1 {
        font-size: 3rem;
        text-align: left;
        font-weight: 600;
    }

    p {

    }
`

const AboutMe = () => {
    return (
        <div className="container mx-auto px-20 py-36">
            <StyledAboutMe>
                <div className="text_container">
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque eveniet magnam itaque necessitatibus sapiente rerum esse, expedita ratione fuga ex consequatur exercitationem aspernatur amet aut soluta reprehenderit quae aliquam?</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente deleniti, nisi quae optio ipsa, ad a corrupti doloribus.</p>
                </div>
                

                <img src={personalImage} alt="Gustavo Farias" className="bg-gray-900 p-4 mx-auto w-72 md:w-80 xl:w-96 rounded-md shadow-2xl hover:scale-105 duration-200"/>
            </StyledAboutMe>
        </div>
    )
}

export default AboutMe;
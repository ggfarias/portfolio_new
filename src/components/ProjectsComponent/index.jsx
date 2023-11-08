import styled from "styled-components"
import { IoMdOpen } from 'react-icons/io';
import newsletterImage from '../../assets/images/newsletter-image.png';


const StyledProjectsComponent = styled.section`
    h1 {
        font-size: 3rem;
        text-align: left;
        font-weight: 600;
        padding-bottom: 1.5rem;
    }
    h2 {
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        color: white;
    }

    h3 {
        color: white;
    }

    p {
        color: white;
    }

`

const ProjectsComponent = () => {
    return(
        <div className="container mx-auto px-20 py-36">
            <StyledProjectsComponent>
                <h1>Personal Projects</h1>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-8">
                    <div className="flex flex-col shadow-2xl bg-[#164863] rounded md:hover:scale-105 md:hover:bg-[#427D9D] duration-100">
                        <img src={newsletterImage} alt="Newsletter Image" />
                        <div class="px-8 py-10 flex flex-col gap-4">
                            <h2>Newsletter Challenge</h2>
                            <h3><strong>Technologies used:</strong> Vite, React.js and TailwindCSS.</h3>
                            <p>Simple react component used to subscript in a newsletter program.</p>
                            <div className="flex gap-4">
                                <a href="https://newsletter-challenge-snowy.vercel.app/" target="_blank" className="bg-slate-200 text-black font-bold px-8 py-2 rounded hover:bg-gray-400 duration:200">
                                    Open
                                </a>
                                <a href="https://github.com/ggfarias/newsletter-challenge" target="_blank" className="bg-slate-200 text-black font-bold px-8 py-2 rounded hover:bg-gray-400 duration:200">
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </StyledProjectsComponent>
        </div>
    )
}


export default ProjectsComponent
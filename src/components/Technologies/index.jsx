import styled from "styled-components";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoGithub,    } from 'react-icons/bi'; 

const StyledTechnologies = styled.section`
    h1 {
        font-size: 3rem;
        text-align: left;
        font-weight: 600;
        padding-bottom: 1.5rem;
    }

    li {

    }
`

const Technologies = () => {
    return (
        <div className="container mx-auto px-20 py-36">
            <StyledTechnologies>
                <h1>Technologies | Skills</h1>
                <ul className="grid gap-3 grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-7">
                    <li className="shadow-lg rounded bg-[#9BBEC8] flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-[#427D9D] duration-200">
                        <strong className="text-lg lg:font-bold">React</strong>
                        <BiLogoReact className="svg-inline--fa fa-react text-6xl lg:text-7xl" />
                    </li>
                    <li className="shadow-lg rounded bg-[#9BBEC8] flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-[#427D9D] duration-200">
                        <strong className="text-lg lg:font-bold">JavaScript</strong>
                        <BiLogoJavascript className="svg-inline--fa fa-react text-6xl lg:text-7xl" />
                    </li>
                    <li className="shadow-lg rounded bg-[#9BBEC8] flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-[#427D9D] duration-200">
                        <strong className="text-lg lg:font-bold">HTML5</strong>
                        <BiLogoHtml5 className="svg-inline--fa fa-react text-6xl lg:text-7xl" />
                    </li>
                    <li className="shadow-lg rounded bg-[#9BBEC8] flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-[#427D9D] duration-200">
                        <strong className="text-lg lg:font-bold">CSS3</strong>
                        <BiLogoCss3 className="svg-inline--fa fa-react text-6xl lg:text-7xl" />
                    </li>
                    <li className="shadow-lg rounded bg-[#9BBEC8] flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-[#427D9D] duration-200">
                        <strong className="text-lg lg:font-bold">TailwindCSS</strong>
                        <BiLogoTailwindCss className="svg-inline--fa fa-react text-6xl lg:text-7xl" />
                    </li>
                    <li className="shadow-lg rounded bg-[#9BBEC8] flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-[#427D9D] duration-200">
                        <strong className="text-lg lg:font-bold">GitHub</strong>
                        <BiLogoGithub className="svg-inline--fa fa-react text-6xl lg:text-7xl"/>
                    </li>
                </ul>
            </StyledTechnologies>
        </div>
    )
}

export default Technologies; 
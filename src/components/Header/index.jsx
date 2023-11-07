import styled from "styled-components";
import commandIcon from '../../assets/images/command-icon.svg'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.5rem 3rem 1rem 3rem;
    background-color: #DDF2FD;
    
    li a {
        font-size: 1.25rem;
        font-weight: 700;
        padding: 0rem 0.5rem;
    }
`

const Header = () => {
    return(
        <StyledHeader className="container mx-auto justify-between">
            <img src={commandIcon} alt="" className='max-w-12 max-h-12'/>
            <nav>
                <ul className='flex gap-5'>
                    <li><a href="" className="hover:text-[#164863]">Home</a></li>
                    <li><a href="" className="hover:text-[#164863]">About Me</a></li>
                    <li><a href="" className="hover:text-[#164863]">Technologies</a></li>
                    <li><a href="" className="hover:text-[#164863]">Projects</a></li>
                    <li><a href="" className="hover:text-[#164863]">Contact</a></li>
                </ul>
          </nav>
        </StyledHeader>
    )
}

export default Header;
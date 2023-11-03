import styled from "styled-components";
import commandIcon from '../../images/command-icon.svg'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 1.5rem;
    background-color: #faedcd;
    
    li a {
        font-size: 1.25rem;
        font-weight: 700;
    }
`

const Header = () => {
    return(
        <StyledHeader>
            <img src={commandIcon} alt="" className='max-w-12 max-h-12'/>
            <nav>
                <ul className='flex gap-5'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
          </nav>
        </StyledHeader>
    )
}

export default Header;
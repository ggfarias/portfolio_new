import styled from "styled-components"


const StyledProjectsComponent = styled.section`
    h1 {
        font-size: 3rem;
        text-align: left;
        font-weight: 600;
        padding-bottom: 1.5rem;
    }

`

const ProjectsComponent = () => {
    return(
        <div className="container mx-auto px-20 py-36">
            <StyledProjectsComponent>
                <h1>Personal Projects</h1>

            </StyledProjectsComponent>
        </div>
    )
}


export default ProjectsComponent
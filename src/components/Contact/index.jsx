import styled from "styled-components";

const StyledContact = styled.section`
    h1 {
        font-size: 3rem;
        text-align: center;
        font-weight: 600;
        padding-bottom: 1.5rem;
    }

`

const Contact = () => {
    return(
        <div className="container mx-auto px-20 py-36">
            <StyledContact>
                <h1>Contact Me</h1>
                <p className="text-center text-xl font-medium">
                    If you wish to contact me, just click on the button below or send me a message me on LinkedIn.
                </p>
                <div className="flex justify-center pt-6">
                    <a href="mailto:gustavocgf@gmail.com">
                        <button className="bg-[#164863] py-4 px-8 mx-2 text-white font-bold rounded-lg hover:bg-[#9BBEC8] hover:text-black duration-200">
                            Mail me
                        </button>
                    </a>
                    {/* <button className="bg-[#164863] py-4 px-8 mx-2 text-white font-bold rounded-lg hover:bg-[#9BBEC8] hover:text-black duration-200">
                        Leave a message
                    </button> */}
                </div>
            </StyledContact>
        </div>
    )
}

export default Contact;
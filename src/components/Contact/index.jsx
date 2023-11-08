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
                <p className="text-center text-xl">
                    If you wish to contact me, just click any of the buttons below.
                </p>
                <div className="flex justify-center pt-6">
                    <button className="bg-[#164863] py-4 px-8 mx-2 text-white font-bold rounded-lg hover:bg-[#9BBEC8] hover:text-black duration-200">
                        Mail me
                    </button>
                    <button className="bg-[#164863] py-4 px-8 mx-2 text-white font-bold rounded-lg hover:bg-[#9BBEC8] hover:text-black duration-200">
                        Leave a message
                    </button>
                </div>
            </StyledContact>
        </div>
    )
}

export default Contact;
import styled from "styled-components";


export const Image = () => {
    return (
        <StyledImageBox>
            <StyledImage src={'src/assets/images/photo.jpg'} alt={"myPhoto"}/>
        </StyledImageBox>
    );
};

const StyledImage = styled.img`
    width: 349px;
    height: 349px;
    border-image: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
    //display: block;
    border-radius: 50%;
`

const StyledImageBox = styled.div`
    padding: 9px; /* толщина границы */
    background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
    border-radius: 50%;
    display: inline-block;
`
import styled from "styled-components";

export const FeedBack = () => {
    return (
        <StyledDiv>
            <h2>For any questions please mail me:</h2>
            <h2><span className='email'>hi@pavanmg.in</span></h2>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    width: 913px;
    height: 165px;
    position: absolute;
    top: 4240px;
    left: 318px;
    display: flex;
    flex-direction: column;

    h2 {
        font-family: DM Sans, sans-serif;
        font-weight: 700;
        font-size: 58px;
        line-height: 70px;
        letter-spacing: -2px;
        color: #1E0E62;
        text-align: center;
        margin: 0; 

        .email {
            background-image: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
            color: transparent;
            background-clip: text;
            margin: 0;
        }

    }
`
import styled from "styled-components";
import {Image} from "../image/Image.tsx";


export const AboutMe = () => {
    return (
        <StyledMain>
            <StyledDiv>
                Hi, &#128075;<br/>
                My Name is<br/>
                <span className="Name">Pavan MG</span><br/>
                I built things for web
            </StyledDiv>
            <div>
                <Image/>
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    width: 1204px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 320px;
    left: 177px;
`

const StyledDiv = styled.div`
    .Name {
        background-image: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    ;
        color: transparent;
        background-clip: text;
    }
    width: 636px;
    height: 297px;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    vertical-align: middle;
    color: #42446e;

`

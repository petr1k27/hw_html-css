import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const Social = () => {
    return (
        <StyledSocialLinks>
            <ul>
                <li><a href=""><Icon iconId={'octocat'} width={'30px'} height={'30px'} viewBox={"0 0 30 30"}/></a></li>
                <li><a href=""><Icon iconId={'twitter'} width={'30px'} height={'30px'} viewBox={"0 0 30 30"}/></a></li>
                <li><a href=""><Icon iconId={'linkedin'} width={'30px'} height={'30px'} viewBox={"0 0 30 30"}/></a></li>
            </ul>
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.nav `
    width: 130px;
    height: 32px;
    background-color: cornflowerblue;

    ul {
        height: 100%;
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
        justify-content: space-between;
        align-items: center;
    }

    li {
        line-height: 0;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`



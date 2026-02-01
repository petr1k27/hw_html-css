import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tech Stack</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style-type: none;
    }
    a {
        text-decoration: none;
        font-family: DM Sans,sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        vertical-align: middle;
        color: #666666;
    ;

    }
`
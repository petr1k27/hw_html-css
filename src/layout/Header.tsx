import styled from "styled-components";
import {Logo} from "../components/logo/Logo.tsx";
import {Menu} from "../components/menu/Menu.tsx";
import {Social} from "../components/social/Social.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <Social/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #adadad;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1193px;
    height: 59px;



`

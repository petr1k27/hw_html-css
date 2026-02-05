import styled from "styled-components";
import {Logo} from "../components/logo/Logo.tsx";
import {Social} from "../components/social/Social.tsx";
import {Menu} from "../components/menu/Menu.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <div className="class1">
                <Logo logo={'footer'}/>
                <div className="contacts">
                    <p>+91 12345 09876</p>
                    <p>info@example.com</p>
                    <Social/>
                </div>

            </div>
            <div className="divider"></div>
            <div className="class2">
                <Menu variant={"footer"}/>
                <p>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></p>
            </div>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    width: 1192px;
    height: 176px;
    position: absolute;
    top: 4605px;
    left: 179px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .class1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
    }
    
    .contacts {
        width: 617px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        p {
            font-family: DM Sans, sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            color: #42446E;
        }
    }
    
    .class2 {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        
        p {
            font-family: Poppins,sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            text-align: center;
            color: #666666;
        }
        
        span {
            background-image: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
            color: transparent;
            background-clip: text;
        }
    }
    
    .divider {
        width: 1192px;
        height: 6px;
        border-width: 2px;
        background-color: #666666;
        opacity: 0.3;

    }
    
    menu {
        width: 554px;
        height: 26px;
        background-color: bisque;

    }

`

import {Resume} from "../components/resume/Resume.tsx";
import {TechStack} from "../components/techStack/TechStack.tsx";
import {Projects} from "../components/projects/Projects.tsx";
import {FeedBack} from "../components/feedback/FeedBack.tsx";
import {Introduce} from "../components/introduce/Introduce.tsx";
import {Icon} from "../components/icon/Icon.tsx";
import styled from "styled-components";

export const Body = () => {
    return (<div>
            <Introduce/>
            <Resume/>
            <TechStack/>
            <Projects/>
            <FeedBack/>
            <StyledWrapper>
                <Icon iconId={"drawing"} width="621px" height="1019px" viewBox="0 0 621 1019"/>
            </StyledWrapper>

        </div>
    );
};

const StyledWrapper = styled.div`
    position: absolute;
    width: 834px;
    height: 834px;
    opacity: 0.5;
    top: 727px;
    left: 979px;
`



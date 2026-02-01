
import {Resume} from "../components/resume/Resume.tsx";
import {TechStack} from "../components/techStack/TechStack.tsx";
import {Projects} from "../components/projects/Projects.tsx";
import {FeedBack} from "../components/feedback/FeedBack.tsx";
import {AboutMe} from "../components/aboutMe/AboutMe.tsx";

export const Body = () => {
    return (<div>
            <AboutMe/>
            <Resume/>
            <TechStack/>
            <Projects/>
            <FeedBack/>
        </div>
    );
};



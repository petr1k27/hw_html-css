import styled from "styled-components";
import {ResumeCard} from "./resumeCard/ResumeCard.tsx";

export const Resume = () => {
    return (
        <StyledAside>
            <section>
                <h3>About Me</h3>
                <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as
                    your future website. It helps you to combine slides, panels and other components and export it as a
                    set of static files: HTML/CSS/JS.</p>
            </section>

            <section className="experience">
                <h3>Work Experience</h3>
                <ResumeCard
                    title={"Junior Web Developer"}
                    company={"Dr. Rajkumar’s Learning App"}
                    location={"Bengaluru"}
                    date={"Sep 2021 – Dec 2021"}
                    position={"Full Time"}
                />
                <ResumeCard
                    title={"Web Development Intern"}
                    company={"IonPixel Web Solutions"}
                    location={"Bengaluru"}
                    date={"Sep 2021 – Dec 2021"}
                    position={"Internship"}
                />
                <ResumeCard
                    title={"SEO / SEM Specialist"}
                    company={"HAAPS"}
                    location={"Bengaluru"}
                    date={"Sep 2021 – Dec 2021"}
                    position={"Internship"}
                />
            </section>
            <section className="education">
                <h3>Education</h3>
                <ResumeCard
                    title={"Bachelor in Electronics & Communication"}
                    company={"Bangalore Institute of Technology"}
                    location={"Bengaluru"}
                    date={"2015 – 2020"}
                    position={"Full Time"}
                />

            </section>
        </StyledAside>
    );
};

const StyledAside = styled.aside`
    h3 {
        font-family: Poppins, sans-serif;
        font-weight: 700;
        font-size: 42px;
        line-height: 52px;
        letter-spacing: -0.4px;
        color: #42446E;     
    }
    h4 {
        font-family: Poppins,sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 1px;
        color: #666666;

    }
    
    p {
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #666666;
    }
    
    time {
        font-family: Poppins,sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 28px;
        letter-spacing: 1px;
        color: #A7A7A7;


    }
    
    width: 710px;
    height: 815px;
    position: relative;
    top: 870px;
    left: 177px;
`

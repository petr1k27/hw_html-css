import styled from "styled-components";

export const Resume = () => {
    return (
        <StyledAside>
            <section>
                <h2>About Me</h2>
                <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as
                    your future website. It helps you to combine slides, panels and other components and export it as a
                    set of static files: HTML/CSS/JS.</p>
            </section>

            <section className="experience">
                <h2>Work Experience</h2>

                <article className="job">
                    <h3>Junior Web Developer</h3>
                    <p className="company">Dr. Rajkumar’s Learning App</p>
                    <time>Sep 2021 – Dec 2021</time>
                </article>

                <article className="job">
                    <h3>Web Development Intern</h3>
                    <p className="company">IonPixel Web Solutions</p>
                    <time>Sep 2021 – Dec 2021</time>
                </article>
            </section>

            <section className="education">
                <h2>Education</h2>

                <article>
                    <h3>Bachelor in Electronics & Communication</h3>
                    <p>Bangalore Institute of Technology</p>
                    <time>2015 – 2020</time>
                </article>
            </section>
        </StyledAside>
    );
};

const StyledAside = styled.aside`
    width: 710px;
    height: 815px;
    position: relative;
    top: 870px;
    left: 177px;
`

import styled from "styled-components";
import {Icon} from "../../icon/Icon.tsx";

type ProjectPropsType = {
    title: string,
    description: string,
    image: string,
}


export const ProjectCard = (props:ProjectPropsType) => {
    return (
        <StyledProjectCard>
            <div className="projectImage">
                <img src={props.image}  alt="project" />
            </div>
            <div className="projectDescription">
                <h3>{props.title}</h3>
                <p className="description">{props.description}</p>
                <p className="techStack"><span>Tech stack :</span> HTML , JavaScript, SASS, React</p>
                <ul>
                    <li><Icon iconId={"chain"} width={"20px"} height="20px" viewBox={"0 0 20 20"}/>
                        <a>Live Preview</a>
                    </li>
                    <li><Icon iconId={"octocat"} width={"20px"} height="20px" viewBox={"0 0 88 88"}/>
                        <a>View Code</a>
                    </li>
                </ul>
            </div>
        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.div`
    width: 375px;
    height: 570px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 #00000033;


    img {
        width: 375px;
        height: 260px;
        border-radius: 20px 20px 0 0;
        display: block;
    }

    h3 {
        font-family: Poppins, sans-serif;
        font-weight: 700;
        font-size: 28px;
        line-height: 26px;
        color: black;
        margin: 0;
    }

    p.description {
        font-family: Poppins, sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: #666666;
        margin: 0;
    }

    p.techStack {
        font-family: Poppins, sans-serif;
        font-weight: 300;
        font-size: 14px;
        line-height: 26px;
        margin: 0;

        span {
            font-family: Poppins, sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 26px;
            color: cornflowerblue;
        }
    }

    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 317px;
        padding: 0;
        margin: 0;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        padding-left: 10px;
        text-decoration: underline;
    }

    .projectDescription {
        width: 346px;
        height: 310px;
        padding-left: 29px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }
`

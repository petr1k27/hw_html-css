import styled from "styled-components";
import {Technology} from "./technology/Technology.tsx";

export const TechStack = () => {
    return (
        <StyledDiv>
            <section className="title">
                <h2>My Tech Stack</h2>
                <p> Technologies I’ve been working with recently</p>
            </section>
            <section className="techStack">
                <Technology iconId={"html"}/>
                <Technology iconId={"css"}/>
                <Technology iconId={"js"}/>
                <Technology iconId={"react"}/>
                <Technology iconId={"vector"}/>
                <Technology iconId={"bootstrap"}/>
                <Technology iconId={"tilda"}/>
                <Technology iconId={"sass"}/>
                <Technology iconId={"git"}/>
                <Technology iconId={"greensock"}/>
                <Technology iconId={"vscode"}/>
                <Technology iconId={"octocat"}/>
            </section>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    .techStack {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 92px;
    }

    h2 {
        font-family: Poppins, sans-serif;
        font-weight: 800;
        font-size: 48px;
        line-height: 26px;
        color: #42446E;
        margin: 0;
    }

    p {
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 32px;
        line-height: 26px;
        color: #666666;
        margin: 0;

    }

    .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 85px;
    }

    padding: 0;
    width: 1193px;
    height: 557px;
    position: absolute;
    top: 1885px;
    left: 177px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

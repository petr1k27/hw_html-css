import styled from "styled-components";

export const TechStack = () => {
    return (
        <StyledDiv>
            <section>
                <h2>My Tech Stack</h2>
                <p> Technologies I’ve been working with recently</p>
            </section>
            <section className="techStack">
                <StyledSkill>1</StyledSkill>
                <StyledSkill>2</StyledSkill>
                <StyledSkill>3</StyledSkill>
                <StyledSkill>4</StyledSkill>
                <StyledSkill>5</StyledSkill>
                <StyledSkill>6</StyledSkill>
                <StyledSkill>7</StyledSkill>
                <StyledSkill>8</StyledSkill>
                <StyledSkill>9</StyledSkill>
                <StyledSkill>10</StyledSkill>
                <StyledSkill>11</StyledSkill>
                <StyledSkill>12</StyledSkill>
            </section>
        </StyledDiv>
    );
};

const StyledSkill = styled.div`
    height: 120px;
    width: 120px;
    background: #a8a7a7;
    margin: 10px;
`

const StyledDiv = styled.div`
    .techStack {
        display: flex;
    }

    width: 1193px;
    height: 557px;
    position: absolute;
    top: 1885px;
    left: 177px;
    display: flex;
    flex-direction: column;
    background-color: #9f8282;
`

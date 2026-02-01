import styled from "styled-components";

export const Projects = () => {
    return (
        <StyledDiv>
            <section>
                <h2>Projects</h2>
                <p>Things I’ve built so far</p>
            </section>

            <section className="Cards">
                <StyledProjectCard>1</StyledProjectCard>
                <StyledProjectCard>2</StyledProjectCard>
                <StyledProjectCard>3</StyledProjectCard>
                <StyledProjectCard>4</StyledProjectCard>
                <StyledProjectCard>5</StyledProjectCard>
                <StyledProjectCard>6</StyledProjectCard>
            </section>

        </StyledDiv>
    );
};

const StyledProjectCard = styled.div`
    width: 375px;
    height: 567px;
    border-radius: 20px;
    background: #c734d5;
    margin: 10px;
`

const StyledDiv = styled.div`
    .Cards {
        display: flex;
    }
    width: 1194px;
    height: 1413px;
    position: absolute;
    top: 2643px;
    left: 177px;
    display: flex;
    flex-direction: column;
    background-color: bisque;

`
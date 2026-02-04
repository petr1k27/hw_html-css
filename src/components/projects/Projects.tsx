import styled from "styled-components";
import {ProjectCard} from "./projectCard/ProjectCard.tsx";

type ProjectType = {
    title: string,
    description: string,
    image: string,
}

const MyProjects: ProjectType[] = [
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        image: "src/assets/images/pic1.jpg",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        image: "src/assets/images/pic2.jpg",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        image: "src/assets/images/pic3.jpg",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        image: "src/assets/images/pic4.jpg",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        image: "src/assets/images/pic5.jpg",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        image: "src/assets/images/pic6.jpg",
    },
]

export const Projects = () => {
    return (
        <StyledDiv>
            <section className="title">
                <h2>Projects</h2>
                <p>Things I’ve built so far</p>
            </section>

            <section className="Cards">
                {MyProjects.map((project: ProjectType) => {
                        return (
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                image={project.image}
                            />
                        )
                    }
                )
                }
            </section>

        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    .Cards {
        display: flex;
        height: 1202px;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    width: 1194px;
    height: 1413px;
    position: absolute;
    top: 2643px;
    left: 177px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    h2 {
        font-family: Poppins, sans-serif;
        font-weight: 700;
        font-size: 48px;
        line-height: 26px;
        color: #42446E;
        margin: 0;
    }
    
    p {
        font-family: Poppins,sans-serif;
        font-weight: 400;
        font-size: 32px;
        line-height: 26px;
        color: #666666;
        margin: 0;
    }

    .title {
        height: 101px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

`
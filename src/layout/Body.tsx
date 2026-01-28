import styled from "styled-components";

export const Body = () => {
    return (
        <StyledMain>
            <div>
                Hi,<br/>
                My Name is<br/>
                Pavan MG<br/>
                I built things for web
            </div>
            <div>
                <img src='../assets/images/photo.jpg' alt="my photo"/>
            </div>



        </StyledMain>
    );
};

const StyledMain = styled.main`
    background-color: #0f518a
`

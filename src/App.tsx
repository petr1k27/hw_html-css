import './App.css'
import {Header} from "./layout/Header.tsx";
import {Body} from "./layout/Body.tsx";
import {Footer} from "./layout/Footer.tsx";
import styled from "styled-components";

function App() {
    return (
        <StyledApp className="App">
            <Header/>
            <Body/>
            <Footer/>
        </StyledApp>
    )
}

const StyledApp = styled.div`
    position: relative;
    width: 1600px;
    height: 4841px;
`

export default App

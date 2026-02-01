import './App.css'
import {Header} from "./layout/Header.tsx";
import {Body} from "./layout/Body.tsx";
import {Footer} from "./layout/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default App

import './App.css';
import './Mensaje'
import Mensaje from "./Mensaje";


const Description = () => {
    return <p> Esta es la app del cursi fullstack de Midudev</p>
}

function App() {

    return (
        <div className="App">
            <Mensaje color='red' message='Estamos trabajando'/>
            <Mensaje color='green' message='En un curso'/>
            <Mensaje color='blue' message='De React'/>
            <Description/>
        </div>
    );
}

export default App;

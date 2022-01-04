import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaveBare from './Components/NaveBare';
import { CardForm } from './Components/CardForm';
import FooterByMe from './Components/FooterByMe';

function App() {
  return (
    <div className="App ">
      <NaveBare/>
      <CardForm/>
      <FooterByMe/>
    </div>
  );
}

export default App;

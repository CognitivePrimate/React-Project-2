import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePageSearch from './Components/HomePageSearch/HomePageSearch';
import { ItemContextProvider } from './Context/ItemContextProvider';

function App() {

  return (
    <Router>
      <ItemContextProvider>
        <HomePageSearch/>
      </ItemContextProvider>
        
        
    </Router>
  );
}

export default App;

// SAVE FOR LATER? Application ID = 267596f9

import './App.css';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePageSearch from './Components/HomePageSearch/HomePageSearch';
import { ItemContextProvider } from './Context/ItemContextProvider';
import FoundItems from './Components/FoundItems/FoundItems';

function App() {

  return (
    <Router>
      <Header/>
      <ItemContextProvider>
        <HomePageSearch/>
      </ItemContextProvider>
        
        
    </Router>
  );
}

export default App;

// SAVE FOR LATER? Application ID = 267596f9

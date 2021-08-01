import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePageSearch from './Components/HomePageSearch/HomePageSearch';
import { ItemContextProvider } from './Context/ItemContextProvider';
import FoundItems from './Components/FoundItems/FoundItems';
import DetailedItem from './Components/DetailedItem/DetailedItem';

function App() {

  return (
    <Router>
      <Header/>
      <Switch>
          {/* home */}
          <Route path="/" exact>
            <ItemContextProvider>
              <HomePageSearch />
              <FoundItems /> 
            </ItemContextProvider>
          </Route>
        
          <Route path="/DetailedItem/:label" exact>
            <ItemContextProvider>
              <DetailedItem />
            </ItemContextProvider>
          </Route>
      </Switch>
        
    </Router>
  );
}

export default App;

// SAVE FOR LATER? Application ID = 267596f9

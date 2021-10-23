
import { CharacterData } from './contexts/CharactersContext';
import Characters from './components/Characters/Characters'
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import {
  BrowserRouter, 
  Switch, 
  Route
} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <CharacterData>
      <BrowserRouter>
          <Header/> 
          <Switch> 
        
              <Route  exact path="/" render={()=> <Characters />}/>
      
              <Route exact path="/Character" render={()=> <Info />}/>
              
          </Switch>

      </BrowserRouter >
    </CharacterData>

  );
}

export default App;

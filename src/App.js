import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Home } from './pages/Home/index.js';
import {VisualizarAnuncio} from './pages/VisualizarAnuncio/index.js';
import {CadastrarAnuncio} from './pages/CadastrarAnuncio/index.js';
import {EditarAnuncio} from './pages/EditarAnuncio/index.js';

import { Menu } from './components/Menu.js';

function App() {
  return (
    <div>
      <Menu/>
     <Router>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/visualizar-anuncio/:id" component={VisualizarAnuncio}/>
         <Route path="/cadastrar-anuncio" component={CadastrarAnuncio}/>
         <Route path="/editar-anuncio" component={EditarAnuncio}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

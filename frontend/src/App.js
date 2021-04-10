import './App.css';

//importamos css

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons'


//en esta linea importaremos browser router y tambien importaremos 
//routes para asi hacer manejo de nuestro aplicacion
import {BrowserRouter as Router,Route} from 'react-router-dom';
//Router es un contenedor

//aqui estamos importando los archivo de navegacion
//de cada uno de los archivos o componentes que son importados en este archivo
import Navidation from './components/Navigations';
import NoteList from './components/NoteList';
import CreateUser from './components/CreateUsers';
import CreateNotes from './components/CreateNotes';

function App() {
  return (
  //router es el contenedor de la aplicacion
          <Router>
           {/* y en la primera ruta saldra el navigation */}
           <Navidation/>
           {/*  aqui asignamos las rutas */}
           
           <div className="container p-4">
           <Route exact path="/" component={NoteList} />
           <Route exact path="/edit/:id" component={CreateNotes} />
           <Route exact path="/create" component={CreateNotes} />
           <Route exact path="/user" component={CreateUser} />
           </div>
      

          </Router>
);
}

export default App;

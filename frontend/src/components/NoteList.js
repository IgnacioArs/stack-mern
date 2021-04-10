import React, { Component } from 'react';
import axios from 'axios';

//importamos el formato ago
import {format} from 'timeago.js'
//importamos link para dirigirnos a la otra pagina
import { Link } from "react-router-dom";

export default class NoteList extends Component {

    state ={
      notas:[]
    }


   async componentDidMount(){
        this.obtenerLasNotas();
    }

    
   async obtenerLasNotas(){
        const respuesta = await axios.get('http://localhost:4000/api/notes');
    this.setState({notas:respuesta.data})
    }

    
    onDeleteNotas = async (id) => {
         await axios.delete('http://localhost:4000/api/notes/' + id);
        this.obtenerLasNotas();
         console.log(id);
    }

    render() {
        return (
           
           <div className="row">
                  {
                      this.state.notas.map(notas => (
                        
                        <div className="col-md-4 p-2" key={notas._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                <h5>{notas.titulo}</h5>
                                <Link class="btn btn-info " to={"/edit/"+notas._id}>Actualizar</Link>
                                </div>                                    
                                <div className="card-body">
                                        <p>{notas.contenido}</p>
                                        <p>{notas.autor}</p> 
                                        <p>{format(notas.fecha)}</p>
                                </div>
                                <div className="card-footer">
                                        <button type="submit" class="btn btn-danger" onClick={() => this.onDeleteNotas(notas._id)} >Eliminar nota</button>
                                </div>
                                </div>
                        </div>

                      ))
                  }
           </div>
        )
    }
}

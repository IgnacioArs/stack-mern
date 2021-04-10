import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserMinus} from '@fortawesome/free-solid-svg-icons'
//ahora realizaremos un metodo encargado de obtener los datos desde el servidor
//para asi luego mostrarlo en nuestro componente CreateUsers
import axios from 'axios';

export default class CreateUsers extends Component {
//y para almacenar un los datos debemos crear un arreglo con un stado 
//la cual guardara los datos obtenidos de la siguiente forma
state ={
    users:[],
/*     agregamos el siguiente arreglo que aguardara
    los usuarios nuevos en el input del delform */
    nombre:''
}


//aqui con este metodo pedimos los datos al servidor para mostrarlos en pantalla
async componentDidMount(){
    this.getUsuarios();
//aqui usamos la api para poder realizar peticiones
//const res = await axios.get('http://localhost:4000/api/users');
//establecemos el estado de la aplicacion
//agregando los datos a usuario
//this.setState({users:res.data});
//mostramos los datos por consola
console.log(this.state.users);

}


getUsuarios = async () =>{
    const res = await axios.get('http://localhost:4000/api/users');
//establecemos el estado de la aplicacion
//agregando los datos a usuario
this.setState({users:res.data});
}


//este metodo esta siendo escuchado en el input del form
onChangeUsername = (e) =>{
 // e es igual a lo que recibimos desde input y 
 //creamos un estado
    this.setState({
        //y al estado le pasamos lo que
        //targeamos desde el form
        nombre: e.target.value
    })
    console.log(e.target.value)
}
//aqui escuchamos su objeto que nos devuelve
onSubmit = async e =>{
 //creamos una constante la cual guardara los
 //datos guardados
    const res = await  axios.post('http://localhost:4000/api/users',{
        nombre:this.state.nombre
    });
    //despues de enviar los datos
    //lo tomamos vacio
    this.state({nombre:''})
    this.getUsuarios();
    console.log(res);
    //tambien este evento hace que la pagina no se reinicia a la 
    //hora de ejecutar
 e.preventDefault();
}


//este siguiente metodo es para eliminar el usuario
delteUsuario = async (id) => {
    const res = await  axios.delete('http://localhost:4000/api/users/'+id);   
    this.getUsuarios();
    console.log(id);
}


    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                 <div className="cad cad-body">
                 <h3 className="text-align-center">Formulario Agregar usuarios</h3>
                 <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        {/* agregamos el evento onchage cada ves que escuche
                        cuando un suario tipyyy algo */}
                                <input type="text" className="form-control" value={this.state.nombre} onChange={this.onChangeUsername}></input>
                    </div>
                    <button type="submit" className="btn btn-success" >Guardar Usuario</button>
                   
                 </form>
                 </div>
                 </div>
                 <div className="col-md-8">
                 <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                 /*    agregamos el key ya que esto señala que cada uno de los items mesere ser identificado  */
                                        <li className="list-group-item list-group-item-action" key={user._id}>
                                            {user.nombre}
                                        <div className="container text-center" onDoubleClick={() => this.delteUsuario(user._id)}>
                                                 <FontAwesomeIcon icon={faUserMinus}/>
                                             </div> 
                                        </li>
                                        
                                        
                            ))
                        }
                 </ul>
                </div>
            </div>
        )
    }
}

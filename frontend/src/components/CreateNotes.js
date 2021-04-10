import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class CreateNote extends Component {

    state = {
        titulo: '',
        contenido: '',
        fecha: new Date(),
        usuarioseleccionado: '',
        usuarios: [],
        editar: false,
        _id: ''
    }

    async componentDidMount() {
        //obtenemos los parametros obtenidos desde la clase actualizar
        console.log(this.props.match.params);
        //aqui obtenemos todos los datos
        const res = await axios.get('http://localhost:4000/api/users');
        //creamos una condicion si no exiten datos y segmentamos que el primero dato
        //en la parte nombre inicia en el nombre 0 para solucionar el error del click y que no toma al usuario
        if (res.data.length > 0) {
            this.setState({
                usuarios: res.data.map(user => user.nombre),
                usuarioseleccionado: res.data[0].nombre
            })
        }

        //aqui realizaremos la condicion para indicar
        //si inserta o actualiza
        //estamos obteniendo el id y sus demas datos
        //y el id a actualizar se lo estamos pasando al _id
        if(this.props.match.params.id){
              //aqui rellenamos el formularios con los datos obtenidos
              //y tambien realizamos la peticion 
          const res  =  await axios.get('http://localhost:4000/api/notes/'+ this.props.match.params.id);
          //tenemos el id unico y con sus atributos completo o mejor dicho la nota completa obtenida
                console.log(res.data);
            this.setState({
                //aqui rellenamos el formulario con los datos obtenidos
                titulo:res.data.titulo,
                contenido:res.data.contenido,
              /*   fecha: new Date(res.data.fecha), */
                usuarioseleccionado:res.data.autor,
                   editar:true,
                   _id:this.props.match.params.id
               });
        }
     
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            titulo: this.state.titulo,
            contenido: this.state.contenido,
            autor: this.state.usuarioseleccionado,
            fecha: this.state.fecha

        };
            if(this.state.editar){
                axios.put('http://localhost:4000/api/notes/'+this.state._id, newNote);
            }else{
                axios.post('http://localhost:4000/api/notes', newNote);
            }    
            window.location.href = '/';
        
       

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = fecha => {
        this.setState({ fecha });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* SELECT THE USER */}
                        <div className="form-group">
                            <select
                                className="form-control"
                                value={this.state.usuarioseleccionado}
                                onChange={this.onInputChange}
                                name="usuarioseleccionado"
                                required>
                                {
                                    this.state.usuarios.map(user => (
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* Note Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="titulo"
                                onChange={this.onInputChange}
                                name="titulo"
                                value={this.state.titulo}
                                required />
                        </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="contenido"
                                name="contenido"
                                onChange={this.onInputChange}
                                value={this.state.contenido}
                                required>
                            </textarea>
                        </div>
                        {/* Note Date */}
                        <div className="form-group">
                            <DatePicker className="form-control" selected={this.state.fecha} onChange={this.onChangeDate} />
                        </div>
                        <div onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Guardar <i className="material-icons">
                                Datos
</i>
                        </button>
                        </div>
                  
                    </form>
                </div>
            </div>
        )
    }
}
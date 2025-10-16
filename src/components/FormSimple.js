import React, {Component} from 'react';

class FormSimple extends Component {
    //NECESITAMOS CREAR UNA VARIABLE DE REFERENCIA PARA
    //CADA OBJETO DE FORMULARIO

    cajaNombre= React.createRef();

    peticionFormulario=(event)=>{
        event.preventDefault();
        console.log("PETICION LISTA")

        //PARA RECUPERAR EL VALOR DE UN OBJETO REACT SE HACE:
        let nombre=this.cajaNombre.current.value;

        console.log(nombre);

        this.setState({
            nombre:nombre
        })
    }

    state={
        nombre:""
    }
    render() {
        return (
            <div>
                <h1>Formulario</h1>
                <h2 style={{color:"blue"}}>{this.state.nombre}</h2>
                <form onSubmit={this.peticionFormulario}>
                    <label>Nombre: </label>
                    <input ref={this.cajaNombre} type="text" placeholder="Nombre"/>

                    <button type="submit" style={{backgroundColor:"lightgreen"}}>Realizar Peticion</button>
                </form>
            </div>
        );
    }
}

export default FormSimple;
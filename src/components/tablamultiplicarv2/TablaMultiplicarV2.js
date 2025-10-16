import React, {Component} from 'react';

class TablaMultiplicarV2 extends Component {

    cajaNum=React.createRef();

    generarTabla=(event)=>{
        event.preventDefault();

        let numero=this.cajaNum.current.value;

        console.log(numero);

    }

    componentDidMount() {
        this.cargarOpciones();

        let arr=[]
        for(let i=0; i<10; i++){


        }
    }

    cargarOpciones=()=>{
        let aux=[]

        for(let i=1;i<=10;i++){

            aux.push(parseInt(Math.random()*10)+1)
        }

        this.setState({
            opciones:aux
        })

        console.log("Numeros: " +this.state.opciones)
    }
    state={
        opciones:[],
        tabla:[]
    }

    render() {

        return (

            <div>

                <h2>Tabla Multiplicar V2</h2>
                <form onSubmit={this.generarTabla}>
                    <label>Seleccione Numero</label>
                    <select ref={this.cajaNum}>
                        {

                            this.state.opciones.map((opcion, index)=>{
                                return <option key={index}>{opcion}</option>
                            })
                        }
                    </select>
                    <button type="submit">Multiplicar</button>

                    <table>
                        <thead>
                            <tr>
                                <th>Operacion</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.opciones.map((num, index)=>{
                                return(
                                <tr key={index}>
                                    <td>{num}</td>
                                    <td>{num}</td>
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default TablaMultiplicarV2;
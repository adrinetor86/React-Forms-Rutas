import React, {Component} from 'react';

class TablaMultiplicar extends Component {

    cajaNumero=React.createRef();
    generarTabla=(event)=>{
        event.preventDefault();

        let aux=[]
        let numero=parseInt(this.cajaNumero.current.value);
        for (let i = 1; i <= 10; i++) {
            let operacion=numero +" * " + i;
            let resultado= numero * i;

            let dato = {
                operacion: operacion,
                resultado: resultado
            }
            aux.push(dato)
            // aux.push(resultado)

        }

        this.setState({
            numero: parseInt(this.cajaNumero.current.value),
            numerosTabla:aux
        })
    }

    state={
        numerosTabla:[]
    }
    render() {
        return (
            <div>
                <h1>Tabla Multiplicar</h1>
                <form onSubmit={this.generarTabla}>
                    <label>Numero </label>
                    <input ref={this.cajaNumero} required type="number" />
                    <button type="submit">Multiplicar</button>

                    <table border="1px">
                        <thead>
                        <tr>
                            <th>OPERACION</th>
                            <th>RESULTADO</th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                            this.state.numerosTabla.map((fila, index) => {
                                return (<tr key={index}>
                                    {/*<td>{this.cajaNumero.current.value} * {index + 1}</td>*/}
                                    {/*<td>{num}</td>*/}
                                    {<td>{fila.operacion}</td>}
                                    {<td>{fila.resultado}</td>}
                                </tr>);

                            })

                        }
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default TablaMultiplicar;
import React, {Component} from 'react';

class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/musica">Musica</a>
                    </li>
                    <li>
                        <a href="/cine">Cine</a>
                    </li>
                    <li>
                        <a href="/formsimple">Form</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MenuRutas;
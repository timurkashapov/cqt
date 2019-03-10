// import React from 'react';
import React, {Component} from 'react';
import 'styles/app/master.css';
import logo from 'img/logo.png';

class Grettings extends Component {
    render() {
        return <div>Hi! {this.props.firstName} {this.props.lastName} </div>;
    }
}

//                React.Component
class App extends Component {
    render() { // здесь происходит вся конфигурация html разметки для последующей её отрисовки.
        return (
            <div className="app">
                <header className="app-header">
                    <h1 className=app-title>REACT JS</h1>
                    <Grettings firstName="Timur" lastName="Kashapov"/>
                </header>
                <img className="app-img-logo" src={logo} alt="logo"/>
                <p className="app-intro">
                    We are from <code>App.js</code> JSX file !
                </p>
            </div>
        );
    }
}

export default App;
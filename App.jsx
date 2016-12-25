import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data....'
        }

        this.updateState = this.updateState.bind(this);
    };

    updateState(e){
        this.setState({
            data: 'Data updated from child component....'
        });
    }

    render() {
        return (
            <div>
                <Content myDataProp={this.state.data} myUpdateStateProp={this.updateState}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.myUpdateStateProp}>Click!</button>
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
}

export default App;

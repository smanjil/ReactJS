import React from 'react';

class App extends React.Component {
    render() {
        var i = 1;

        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        };
        return (
           <div>
               Hello World!
               <h1>{1 + 1}</h1>
               <h2 style={myStyle}>{i == 1 ? 'True' : 'False'}</h2>

               <Header/>
               <Content/>
           </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header!</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text....</p>
            </div>
        );
    }
}

export default App;

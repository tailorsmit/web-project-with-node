import React, { Component } from 'react';
import Routes from './Routes';


class App extends Component {

constructor(){
super();
    this.state={
    appName: "Login with Facebook and Google using ReactJS and RESTful APIs",
}
}

render() {
return (
<div>
<Routes/>
</div>
);
}
}
export default App;
import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: "Budget App"
        }
    }
    render(){
        return(
            <h1>{this.state.header}</h1>
        )
    }
}
let root = document.getElementById('root');
ReactDOM.render(<Root />, root);

export default Root;s
import React, {Component} from 'react';

class Well extends Component{

    render() {
        const { name } = this.props;
        return ( 
            <div >
            Welcome { name } </div>
        );
    }
}



export default Well;
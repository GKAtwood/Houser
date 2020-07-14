import React, {Component} from 'react';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            houses: {}
        }
    }

    render(){
        return(

            <div>Dashboard
                <button>Add New Property</button>


            </div>


        )
    }
}


export default Dashboard
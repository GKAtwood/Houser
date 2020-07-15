import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component{
    constructor(props){
        super(props)
        this.state={
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
    }

    render(){
        return(

            <for className ='wizard'>
               
                <h1>HOUSER</h1>
                
                 <div className='form'>
                     <h2>Add New Listing</h2>
                     <Link to= '/'>
                <div className='button-container'>
            <button className='black-button'>Cancel</button>
            </div>
            </Link>
                Address: <input type="text" value={this.state.address} onChange={e=>this.handleChange(e,"address")} />
                
               
               City: <input type="text" value= {this.state.city} onChange={e=>this.handleChange(e,"city")}/>
             
                
                State: <input type="text" value={this.state.state} onChange={e=>this.handleChange(e,"state")} />
                 Zipcode: <input type="text" value= {this.state.zipcode} onChange={e=>this.handleChange(e,"zipcode")}/>
                </div>
                

            </for>
 

        )
    }
}


export default Wizard
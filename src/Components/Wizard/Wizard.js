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
                <img src= 'https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/houser_logo.png' alt='logo'/>
                <h1>HOUSER</h1>
                 <div className='form'>
                Address: <input type="text" value={this.state.address} onChange={e=>this.handleChange(e,"address")} />
                </div>
                <div className='form'>
               City: <input type="text" value= {this.state.city} onChange={e=>this.handleChange(e,"city")}/>
                </div>
                <div className='form'>
                State: <input type="text" value={this.state.state} onChange={e=>this.handleChange(e,"state")} />
                </div>
                <div className='form'>
               Zipcode: <input type="text" value= {this.state.zipcode} onChange={e=>this.handleChange(e,"zipcode")}/>
                </div>
                <Link to= '/'>
                <div className='button-container'>
            <button className='black-button'>Cancel</button>
            </div>
            </Link>

            </for>
 

        )
    }
}


export default Wizard
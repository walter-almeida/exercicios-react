import React, { Component } from 'react'

class Field extends Component {

    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
        //independente de qual classe chamar a função 
        //da classe Field, com o uso do bind, o this
        //necessariamente se referirá a classe Field e 
        //não a classe que chamou o evento
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState( {value: event.target.value})
    }

    render(){
        return (
            <div>
                <h1>{this.state.value}</h1>
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field
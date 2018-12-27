import React from 'react';
import {Input} from 'reactstrap';

export default class NumberInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value : '',
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        let value = event.target.value;
        if(!value ||
            ((this.props.min && value<this.props.min) || (this.props.max && value>this.props.max))) {
            value='';
        }
        this.setState({value});

        //failsafe when empty
        if(value){
            this.props.onChange(value);
        }else{
            this.props.onChange(undefined);
        }
    }

    render(){
        return (
            <Input type="number" placeholder={this.props.placeholder}
                    min={this.props.min} max={this.props.max} onChange={this.onChange} value={this.state.value} />
        )
    }

}
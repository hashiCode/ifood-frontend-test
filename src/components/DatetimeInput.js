import React from 'react';
import Datetime from 'react-datetime'
import moment from 'moment';

export default class DatetimeInput extends React.Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(momentObj){
        console.log(momentObj);
        if(momentObj instanceof moment){
            this.props.onChange(momentObj.format(this.props.pattern));
        } else if(!momentObj){
            this.props.onChange(undefined);
        }
    }

    render(){
        return (
            <Datetime closeOnSelect={true} placeholder={this.props.placeholder} onChange={this.onChange} inputProps={this.props.inputProps}/>
        )
    }

}
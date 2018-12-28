import React from 'react';
import Select from 'react-select'

export default class SingleSelect extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value : undefined
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    getOptionLabel(option){
        return option.name;
    }
    getOptionValue(option){
        return option.value;
    }

    onChangeValue(option){
        let value = option ? option.value : undefined;
        this.setState({value})
        this.props.onChange(value);
    }

    render(){
        return(
            <Select getOptionLabel={this.getOptionLabel} getOptionValue={this.getOptionValue}
                    options={this.props.options} isMulti={false} placeholder={this.props.placeholder}
                    onChange ={this.onChangeValue} value={this.props.value} isClearable={true}/>
            )
    }
}
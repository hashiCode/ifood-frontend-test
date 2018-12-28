import React from 'react';
import {
    intlShape,
    injectIntl,
} from 'react-intl';
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
} from 'reactstrap';
import requestService from '../services/RequestService'
import _ from 'lodash'
import SingleSelect from './SingleSelect'
import NumberInput from './NumberInput'
import DatetimeInput from './DatetimeInput';

class FilterPanel extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           filters : undefined,
        }
    }

    componentDidMount(){
        requestService.getFilters().then(response => {
            this.setState({filters : response.filters})
        })
    }

    createFilter(filter) {
        let component;
        let props ={
            placeholder : filter.name,
            onChange : value => this.props.updateSearchJSON(filter.id, value),
            key : filter.id,
        }
        if (filter.values) {
            component = <SingleSelect {...props} options={filter.values}  />;
        }
        else if (filter.validation) {
            let validation = filter.validation;
            let type = validation.primitiveType
            switch(type){
                case "INTEGER" :
                    if(validation.min){
                        props.min = validation.min
                    }
                    if(validation.max){
                        props.max = validation.max;
                    }
                    component = <NumberInput {...props} />
                break;
                case "STRING" :
                    props.inputProps={placeholder : filter.name}
                    //workaround to be compatible with moment api
                    props.pattern=validation.pattern.replace('yyyy', 'YYYY').replace('dd', 'DD')
                    component = <DatetimeInput{...props}/>
                break;
                default :
                    console.log(`Unknow type ${type}`)
            }
        }
        return component;
    }

    render(){
        const {messages} = this.props.intl;
        const filters = _.map(this.state.filters, filter => {
            let component = this.createFilter(filter)
            let colFilter =<Col key={filter.id}>{component}</Col>;
            return colFilter;
        })
        return (
            <Card className="mt-2 mx-2">
                <CardHeader>{messages["filter_panel.title"]}</CardHeader>
                <CardBody>
                    <Container>
                       <Row>
                           {filters}
                       </Row>
                    </Container>
                    
                </CardBody>
            </Card>
        )
    }

}

FilterPanel.propTypes = {
    intl: intlShape.isRequired,
};

export default injectIntl(FilterPanel)
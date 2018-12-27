import React from 'react';
import {
    intlShape,
    injectIntl,
} from 'react-intl';
import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

class FilterPanel extends React.Component{

    render(){
        const {messages} = this.props.intl;
        return (
            <Card className="mt-2 mx-2">
                <CardHeader>{messages["filter_panel.title"]}</CardHeader>
                <CardBody>
                    {this.props.children}
                </CardBody>
            </Card>
        )
    }

}

FilterPanel.propTypes = {
    intl: intlShape.isRequired,
};

export default injectIntl(FilterPanel)
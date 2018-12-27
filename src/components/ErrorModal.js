import React from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import {
    intlShape,
    injectIntl,
} from 'react-intl';
import './css/ErrorModal.scss'

class ErrorModal extends React.Component{

    render(){
        const {messages} = this.props.intl;
        return <Modal isOpen={true}>
            <ModalHeader className="error-modal-header">{messages["error_modal.title"]}</ModalHeader>
            <ModalBody>{this.props.errorMSG}</ModalBody>
        </Modal>
    }
}

ErrorModal.propTypes = {
    intl: intlShape.isRequired,
};

export default injectIntl(ErrorModal)
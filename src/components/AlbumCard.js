import React from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardBody,
} from 'reactstrap';

export default class AlbumCard extends React.Component{

    render(){
        return (
            <Card className="mx-1 my-1">
                <CardImg top width="100%" src={this.props.photo.src}  />
                <CardBody>
                    <CardTitle>{this.props.photo.albumName}</CardTitle>
                </CardBody>
            </Card>
        )
    }
}
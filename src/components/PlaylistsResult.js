import React from 'react';
import Gallery from 'react-photo-gallery';
import AlbumCard from './AlbumCard'
import {
    intlShape,
    injectIntl,
} from 'react-intl';
import {
    Alert
} from 'reactstrap'
import {
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PlaylistsResult extends React.Component{

    render(){
        const {playlists} = this.props;
        const {messages} = this.props.intl;
        return (
            <div>
                {playlists && playlists.length >0 ? 
                <Gallery
                    photos={playlists}
                    ImageComponent={AlbumCard}/>
                : 
                <Alert color="secondary" className="mx-5 mt-5">
                    <FontAwesomeIcon icon={faInfoCircle} /> { messages["playlist_result.empty"]}
                </Alert>}
            </div>
        )
    }

}

PlaylistsResult.propTypes = {
    intl: intlShape.isRequired,
};

export default injectIntl(PlaylistsResult)
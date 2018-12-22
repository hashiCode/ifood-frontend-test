import React from 'react';
import FilterPanel from './FilterPanel'
import PlaylistsResult from './PlaylistsResult'

export default class FeaturedPlaylist extends React.Component{

    render(){
        return (
        <div>
            FeaturedPlaylist
            <FilterPanel/>
            <PlaylistsResult/>
        </div>
        )
    }
}
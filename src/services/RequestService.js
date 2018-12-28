import axios from 'axios';
import queryString from 'query-string'

class RequestService {

    getPlaylists(searchJSON, accessToken){
        let queryParameters = this.buildQueryParameters(searchJSON);
        return axios.get(`https://api.spotify.com/v1/browse/featured-playlists?${queryParameters}`, {
            headers : {
                "Authorization" : `Bearer ${accessToken}`
            }
        }).then(response => response.data)
    }

    buildQueryParameters(searchJSON){
        return queryString.stringify(searchJSON);
    }

    getFilters(){
        //use https to fetch from heroku
        return axios.get(`https://www.mocky.io/v2/5a25fade2e0000213aa90776`)
            .then(response => response.data)
    }
}

const resquestService = new RequestService();

export default resquestService;
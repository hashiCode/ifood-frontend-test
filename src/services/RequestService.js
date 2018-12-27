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
        console.log(queryString.stringify(searchJSON));
        return queryString.stringify(searchJSON);
    }
}

const resquestService = new RequestService();

export default resquestService;
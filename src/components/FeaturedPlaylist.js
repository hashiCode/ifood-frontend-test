import React from 'react';
import FilterPanel from './FilterPanel';
import PlaylistsResult from './PlaylistsResult';
import locale from './filterOptions/locale';
import country from './filterOptions/country';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import {
    intlShape,
    injectIntl,
} from 'react-intl';
import NavBar from './NavigationBar'
import SingleSelect from './SingleSelect';
import DateTime from 'react-datetime';
import NumberInput from './NumberInput'
import 'react-datetime/css/react-datetime.css'
import 'moment';
import requestService from '../services/RequestService';
import _ from 'lodash'
import localStorageService from '../services/LocalStorageService'
import Spinner from './Spinner';
import ErrorModal from './ErrorModal'

class FeaturedPlaylist extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            searchJSON : {
                locale : undefined,
                country : undefined,
                timestamp : undefined,
                limit : undefined,
                offset : undefined,
            },
            playlists : undefined,
            loading : false,
            validToken : true,
            errorModal : undefined,
        }
        this.updateSearchJSON = this.updateSearchJSON.bind(this);
        this.fecthPlaylists = this.fecthPlaylists.bind(this);
    }

    componentDidMount(){
        window.history.pushState(null, '', '/')
        this.refreshPlaylists = setInterval(() =>  this.fecthPlaylists(), 30000);
        this.fecthPlaylists()
    }

    componentWillUnmount(){
        clearInterval(this.refreshPlaylists)
        localStorageService.removeToken();
    }

    updateSearchJSON(filterName, value){
        let {searchJSON} = this.state;
        searchJSON[filterName] = value;
        this.setState({searchJSON});
        console.log(this.state.searchJSON);
        this.fecthPlaylists();
    }

    createErrorModal(contentId){
        const {messages} = this.props.intl;
        return <ErrorModal errorMSG={messages[contentId]} />
    }

    fecthPlaylists(){
        const token = localStorageService.getToken();
        if(token && this.state.validToken){
            this.setState({loading : true})
            requestService.getPlaylists(this.state.searchJSON, token).then(result => {
                const resultPlaylist = result.playlists
                if(resultPlaylist && resultPlaylist.items){
                    let playlists=this.processPlaylist(resultPlaylist.items);
                    this.setState({playlists, loading : false});
                }
            }).catch(error => {
                //TODO check for other erros/ refresh token
                const errorModal = this.createErrorModal("error_modal.errorRequest")
                this.setState({loading : false, validToken : false, errorModal});
                clearInterval(this.refreshPlaylists)
            });
        }
        else{
            const errorModal = this.createErrorModal("error_modal.expireToken")
            this.setState({validToken : false, errorModal});
            clearInterval(this.refreshPlaylists)
        }
    }

    processPlaylist(rawPlayList){
        let playlists =[];
        _.forEach(rawPlayList, item => {
            playlists.push({
                src : item.images[0].url,
                albumName : item.name,
                width : 300,
                height : 300
            })
        })
        return playlists;
    }

    render(){
        const {messages} = this.props.intl;
        return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col>
                        <FilterPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <SingleSelect placeholder={messages["filter_panel.filter.locale"]} options={locale}
                                            onChange={value => this.updateSearchJSON('locale', value)}/>
                                    </Col>
                                    <Col>
                                        <SingleSelect placeholder={messages["filter_panel.filter.country"]} options={country}
                                            onChange={value => this.updateSearchJSON('country', value)}/>
                                    </Col>
                                    <Col>
                                        <DateTime placeholder={messages["filter_panel.filter.data"]} inputProps={{placeholder :messages["filter_panel.filter.date"] }}
                                            onChange={moment => this.updateSearchJSON("timestamp", moment.format("YYYY-MM-DDTHH:mm:ss"))}/>
                                    </Col>
                                    <Col>
                                        <NumberInput placeholder={messages["filter_panel.filter.size"]} min={1} max={50} onChange={value => this.updateSearchJSON("limit", value)}/>
                                    </Col>
                                    <Col>
                                        <NumberInput placeholder={messages["filter_panel.filter.page"]} min={0} onChange={value => this.updateSearchJSON("offset", value)}/>
                                    </Col>
                                </Row>
                            </Container>
                        </FilterPanel>
                    </Col>
                </Row>

                <Row className="justify-content-center flex-grow-1">
                    <Col>
                        <PlaylistsResult playlists={this.state.playlists}/>
                    </Col>
                </Row>
            </Container>

            {this.state.loading && <Spinner />}
            
            {this.state.errorModal}
        </div>
        )
    }
}

FeaturedPlaylist.propTypes = {
    intl: intlShape.isRequired,
};

export default injectIntl(FeaturedPlaylist)
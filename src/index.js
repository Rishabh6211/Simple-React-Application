import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YtSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import {Router,Route, browserHistory, IndexRoute} from 'react-router'
import routes from './routes'
import videoDetail from './components/video_detail'
import { BrowserRouter, Switch } from 'react-router-dom'
const Api_Key = 'AIzaSyCVfPXzH7VB0ktejV2N8Ryiqt40D8xl8Sg';

class App extends Component {

	constructor(props){
		super(props);

		this.state = {videos:[]}
		this.videoSearch('motivational')
	}

		videoSearch(term){
			YtSearch({key:Api_Key, term:term},(videos)=>{
				this.setState({videos});
				console.log("bar",videos);
			})	
		}

	render(){
		return ( 
			<div>
				<SearchBar onSearchtermChange={term => this.videoSearch(term)}/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

export default  App;

ReactDom.render(( <BrowserRouter>
 <Switch>
      <Route exact path='/page' component={App}/>
      <Route path='/detail' component={videoDetail}/>
 </Switch>
</BrowserRouter>), document.querySelector('.container'));

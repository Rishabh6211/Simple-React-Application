import React,{Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
	constructor(props){
		super(props);
	}

	render(){

		const item = this.props.videos.map((video) =>{
			console.log("vodeo",video); 
			return <VideoListItem key={video.etag} video={video}/>
		})

		return (
			<ul className="col-md-4 list-group">
				{item}
			</ul>
		);
	};
}

export default VideoList;
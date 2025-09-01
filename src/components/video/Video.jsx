import { useParams } from 'react-router-dom';
import './Video.css'
import axios from 'axios';
import { API_KEY } from '../../data';
import { useEffect, useState } from 'react';
import { views } from '../../data';
import moment from 'moment';

const Video = ({videoPlaying, setVideoPlaying})=>{

    const {categoryId, id} = useParams();
    const [videoPlay, setVideoPlay] = useState(null)
    const [videoContent, setVideoContent] = useState(null)

    const video_data = async ()=>{
        const res = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
        )

        let {data} = res
        let {items} = data
        setVideoPlay(items[0])
        console.log(items)
    }

    const video_content = async ()=>{
        const res = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoPlay?videoPlay.snippet.channelId : ""
}&key=${API_KEY}`
        )

        let {data} = res
        let {items} = data
        items ? setVideoContent(items[0]) : "video items";
        console.log(items)
    }

    useEffect(()=>{
        video_data()
    },[])

    useEffect(()=>{
        video_content()
    },[videoPlay])

    useEffect(()=>{
        setVideoPlaying(true);
    },[])

    return(
        <div className='videoPlay'>
            <iframe src= {`https://www.youtube.com/embed/${id}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h2>{videoPlay?videoPlay.snippet.title: "tittle here"}</h2>
                        <div className='videoPlayItems'>
                            
                            <div className='videoPlayImg'>
                                <img src={videoContent?videoContent.snippet.thumbnails.high.url: "thumbnail"}></img>
                                <div>
                                    <p>{videoPlay?videoPlay.snippet.channelTitle: "channel tittle"}</p>
                                    <span>{videoContent? `${views(videoContent.statistics.subscriberCount)} subscribers`: "subscribers count"}</span>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className='videoPlayItems_right'>
                                <div>
                                    <i className='fa fa-thumbs-up'></i>
                                    <span>{videoPlay?views(videoPlay.statistics.likeCount): "likecount"}</span>
                                    <i className='fa fa-thumbs-down'></i>
                                </div>
                                <div>
                                    <i className='fa fa-share'></i>
                                    <span>Share</span>
                                </div>
                            </div>
                        </div>

                        <div className='videoPlayItems_descreption'>
                            <span>{videoPlay?views(videoPlay.statistics.viewCount): "view count"} views</span>
                            <span>{videoPlay?moment(videoPlay.snippet.publishedAt).fromNow(): "published at"}</span>
                            <br></br>
                            <span>{videoContent?videoContent.snippet.description : "description"}</span>
                        </div>
        </div>
    )
}

export default Video;
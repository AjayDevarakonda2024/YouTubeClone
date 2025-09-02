import { useParams } from 'react-router-dom';
import './Video.css'
import axios from 'axios';
import { API_KEY } from '../../data';
import { useEffect, useState } from 'react';
import { views } from '../../data';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Video = ({videoPlaying, setVideoPlaying})=>{

    const {categoryId, id} = useParams();
    const [videoPlay, setVideoPlay] = useState(null)
    const [videoContent, setVideoContent] = useState(null)
    const [description, setDescription] = useState("")
    const [showMore, setShowMore] = useState(false)
    const [recommended, SetRecommended] = useState([])

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
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoPlay?videoPlay.snippet.channelId : ""}&key=${API_KEY}`
        )

        let {data} = res
        let {items} = data
        items ? setVideoContent(items[0]) : "video items";
        console.log(items)
    }

    const recommended_video_data = async ()=>{
        const res = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        )
        let {data} = res
        let {items} = data
        SetRecommended(items)
        console.log(items)
    }

    useEffect(()=>{
        video_data()
        recommended_video_data()
        window.scrollTo({top : 0, behavior: "smooth"})
    },[categoryId, id])

    useEffect(()=>{
        if(videoPlay){
            video_content()
        }
        
    },[videoPlay])

    useEffect(()=>{
        setVideoPlaying(true);
    },[])

    useEffect(()=>{
        let showmore = document.getElementById("showMore")
        let words = videoContent?.snippet?.description || "";
        let desc = words.split(" ")
        if (desc.length > 30 && !showMore){
           setDescription(desc.slice(0, 30).join(' ')+ "...");
           showmore.innerText = "more"
        }
        else if(desc.length > 0 && showMore){
            setDescription(words);
            showmore.innerText = "show less"
        }
        else{
            setDescription(words);
            showmore.innerText = ""
        }

    },[videoContent, showMore])

    return(
        <div className='videopage'>
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
                            <span className='span'>{videoPlay?views(videoPlay.statistics.viewCount): "view count"} views</span>
                            <span className='span'>{videoPlay?moment(videoPlay.snippet.publishedAt).fromNow(): "published at"}</span>
                            <br></br>
                            <span className='description'>{description} <span id='showMore' onClick={()=>{!showMore ? setShowMore(true) : setShowMore(false)}}></span></span>
                        </div>
        </div>
        <div className='videoSuggestion'>
            {
                        recommended.map((element)=>{
                            return(
                                <Link className='recommendedVideos' key={element.id} to={`/video/${element.snippet.categoryId}/${element.id}`}>
                                    <div className='logo'>
                                        <img src={element.snippet.thumbnails.medium.url} alt={element.snippet.title}></img>
                                    </div>
                                    <div className='data'>
                                        <h5>{element.snippet.title}</h5>
                                        <p>{element.snippet.channelTitle}</p>
                                        <p>{views(element.statistics.viewCount)} views &bull; {moment(element.snippet.publishedAt).fromNow()}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
        </div>
        </div>
    )
}

export default Video;
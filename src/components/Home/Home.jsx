import {useDispatch} from 'react-redux'
import { increment } from '../Slice/LikesSlice';
import { useEffect, useState } from 'react';
import { menu } from '../Slice/MenuSlice';
import axios from 'axios';
import { API_KEY } from '../../data';
import './Home.css'
import {Link} from 'react-router-dom'
import { views } from '../../data';
import moment from 'moment'
import { videoCategories } from '../../data';

const Home = ({bars, setVideoPlaying, videoPlaying, categoryId, setCategoryId})=>{
    const [video, setVideo] = useState([])
    const get_data = async ()=>{
        const res = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        )
        let {data} = res
        let {items} = data
        setVideo(items)
        console.log(items)
    }

    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(menu("home"))
        get_data();
    },[categoryId])

    useEffect(()=>{
        setVideoPlaying(false);
    },[])
    return(
        <>
        <div className={!bars ? "categories " : "categories1"}>
            {
                videoCategories.map((element, index) => {
                    return(
                        <p key={index} onClick={()=>setCategoryId(element.id)}>{element.name}</p>
                    )
                })
            }
        </div>
        {
            video.map((element)=>{
                return(
                    <Link  className={!bars ? "video " : "video1"} key={element.id} to={`/video/${element.snippet.categoryId}/${element.id}`}>
                        <div className='img'><img src={element.snippet.thumbnails.high.url} alt={element.snippet.title}></img></div>
                        <h4>{element.snippet.title}</h4>
                        <p>{element.snippet.channelTitle}</p>
                        <p>{views(element.statistics.viewCount)} views &bull; {moment(element.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })
        }
        </>
    )
}

export default Home;
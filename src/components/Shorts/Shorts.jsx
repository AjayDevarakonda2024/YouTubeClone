import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { menu } from "../Slice/MenuSlice";
import axios from "axios";
import { API_KEY } from "../../data";
import './shorts.css'

const Shorts = ()=>{
    const dispatch = useDispatch();
    const [shortVideo, setShortVideo] = useState([])
    const Short_data = async ()=>{
        const res = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=10&key=${API_KEY}`
        )
        let {data} = res
        let {items} = data
        console.log(items)
        setShortVideo(items)
    }
    useEffect(()=>{
        dispatch(menu("shorts"))
        Short_data()
    },[])

    return(
        <div className="shorts">
        {
            shortVideo.map((element, index)=>{
                return(
            <iframe key={index} src= {`https://www.youtube.com/embed/${element.id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                )
 
            })
        }
        </div>
    )
}

export default Shorts;
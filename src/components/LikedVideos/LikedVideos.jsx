import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { menu } from "../Slice/MenuSlice";

const LikedVideos = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(menu("likedvideos"))
    },[])
    return(
        <>
        <h1>Liked Videos</h1>
        </>
    )
}

export default LikedVideos;
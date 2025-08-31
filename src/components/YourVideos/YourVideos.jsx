import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { menu } from '../Slice/MenuSlice';

const YourVideos = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(menu("yourvideos"))
    },[])

    return(
        <>
        <h1>Your videos</h1>
        </>
    )
}

export default YourVideos;
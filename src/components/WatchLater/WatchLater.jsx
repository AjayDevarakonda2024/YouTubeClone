import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { menu } from '../Slice/MenuSlice';

const WatchLater = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(menu("watchlater"))
    },[])

    return(
        <>
        <h1>Watch Later</h1>
        </>
    )
}

export default WatchLater;
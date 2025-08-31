import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { menu } from '../Slice/MenuSlice';

const PlayLists = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(menu("playlists"))
    },[])

    return(
        <>
        <h1>PlayLists</h1>
        </>
    )
}

export default PlayLists;
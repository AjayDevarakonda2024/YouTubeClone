import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { menu } from '../Slice/MenuSlice';

const History = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(menu("history"))
    },[])

    return(
        <>
        <h1>History</h1>
        </>
    )
}

export default History;
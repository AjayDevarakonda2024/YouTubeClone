import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { menu } from "../Slice/MenuSlice";

const Subcriptions = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(menu("subcriptions"))
    },[])
    return(
        <>
        <h1>Subcriptions</h1>
        </>
    )
}

export default Subcriptions;
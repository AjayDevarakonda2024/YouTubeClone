import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { menu } from "../Slice/MenuSlice";

const You = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(menu("you"))
    },[])
    return(
        <>
        <h1>You</h1>
        </>
    )
}

export default You;
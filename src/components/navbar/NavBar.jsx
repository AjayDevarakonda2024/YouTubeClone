import { useRef } from 'react';
import './NavBar.css'
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { menu } from '../Slice/MenuSlice';


const NavBar = ({setBars, bars, setSideNav})=>{
    const dispatch = useDispatch();
    const ref1 = useRef(null);
    const set_bars = ()=>{
        bars? setBars(false): setBars(true)
        console.log(bars)
    }
    return(
        <>
            <div className="nav_bar">
                <div className="nav_bar_child_left">
                    <i className="fa fa-bars non_responsive_nav" onClick={()=>set_bars()}></i>
                    <i className="fa fa-bars responsive_nav" onClick={()=>{setSideNav(true)}}></i>
                    <Link  to='/' onClick={()=>dispatch(menu("home"))}>
                        <div className="nav_bar_child_left_image"></div>
                    </Link>
                    <Outlet></Outlet>
                </div>
                <div className='nav_bar_child_middle'>
                    <div className='nav_bar_child_middle_search'>
                        <input type='text' ref={ref1} placeholder='SEARCH'></input>
                        <button><i className='fa fa-search'></i></button>
                    </div> 
                    <div className='nav_bar_child_middle_mic'><i className='fa fa-microphone'></i></div>
                </div>
                <div className='nav_bar_child_right'>
                    <button className='nav_bar_child_right_create_button'><i className='fa fa-plus'></i>  Create</button>
                    <i className='fa fa-bell'></i>
                    <button className='nav_bar_child_right_account'><h3>A</h3></button>
                </div>
            </div>
        </>
    )
}

export default NavBar;
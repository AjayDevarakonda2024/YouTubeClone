import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar/NavBar'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Shorts from './components/Shorts/Shorts'
import Subcriptions from './components/Subcriptions/Subcriptions'
import { useDispatch, useSelector } from 'react-redux'
import { menu } from './components/Slice/MenuSlice'
import You from './components/You/You'
import History from './components/History/History'
import PlayLists from './components/PlayLists/PlayLists'
import YourVideos from './components/YourVideos/YourVideos'
import WatchLater from './components/WatchLater/WatchLater'
import Video from './components/video/Video'
import LikedVideos from './components/LikedVideos/LikedVideos'

function App() {
  const currentMenu = useSelector((state) => state.menu.page);
  const dispatch = useDispatch();
  const [bars, setBars] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  return (
    <>
    <div className='app'>
      <BrowserRouter>
      <NavBar setBars={setBars} bars={bars}></NavBar>
      <div className='main'>
        <div className={videoPlaying ? "links2" : !bars ? "links " : "links1"}>
          <Link  to='/' className={currentMenu === "home" ? "Link_active ":"Link_not_active"} onClick={()=>dispatch(menu("home"))}><i className='fa fa-home i'></i><p>Home</p></Link>
          <Link  to='/shorts' className={currentMenu === "shorts"? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("shorts"))}><i className='fa fa-film i'></i><p>Shorts</p></Link>
          <Link  to='/subcriptions' className={currentMenu === "subcriptions"? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("subcriptions"))}><i className='fa fa-play i'></i><p>Subcriptions</p></Link>
          <hr style={{border: "1px solid #F2F2F2", width: "100%"}} />
          <Link  to='/you' className={currentMenu === "you"? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("you"))}><p>You</p> <i className='fa fa-arrow-right i'></i></Link>
          <Link  to='/history' className={currentMenu === "history" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("history"))}><i className='fa fa-history i'></i><p>History</p></Link>
          <Link  to='/playlists' className={currentMenu === "playlists" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("playlists"))}><i className='fa fa-music i'></i><p>Playlists</p></Link>
          <Link  to='/yourvideos' className={currentMenu === "yourvideos" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("yourvideos"))}><i className='fa fa-video-camera i'></i><p>Your videos</p></Link>
          <Link  to='/watchlater' className={currentMenu === "watchlater" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("watchlater"))}><i className='fa fa-clock-o i'></i><p>Watch Later</p></Link>  
          <Link  to='/likedvideos' className={currentMenu === "likedvideos" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("likedvideos"))}><i className='fa fa-thumbs-up i'></i><p>Liked Videos</p></Link>  
          <Link  to='/likedvideos' className={currentMenu === "likedvideos" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("likedvideos"))}><i className='fa fa-download i'></i><p>Downloads</p></Link>
          <Link  to='/likedvideos' className={currentMenu === "likedvideos" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("likedvideos"))}><i className='fa fa-scissors i'></i><p>Your clips</p></Link>  
          <hr style={{border: "1px solid #F2F2F2", width: "100%"}} />
          <Link  to='/likedvideos' className={currentMenu === "likedvideos" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("likedvideos"))}><h4>Subscriptions</h4></Link>  
          <Link  to='/likedvideos' className={currentMenu === "likedvideos" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("likedvideos"))}><img src='https://yt3.ggpht.com/7Kva42fe_piY7M7cllv9QoJXnI701DLZzAi-WoyolffFXcbyjJb4hwNv_1qVZjDDwHZfkj7wJQ4=s88-c-k-c0x00ffffff-no-rj'></img><p>HI5 GAMER</p></Link>
          <Link  to='/likedvideos' className={currentMenu === "likedvideos" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("likedvideos"))}><img src='https://yt3.ggpht.com/ZHw8pe9wUHOwh5sNdsCn5geVi054W7q66rkQlzg0RW9ZC_WztvwqvY34ESrcnqSdbL619qvFLA=s88-c-k-c0x00ffffff-no-rj'></img><p>The Cosmic Boy</p></Link>  
          <Link  to='/likedvideos' className={currentMenu === "likedvideos" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("likedvideos"))}><img src='https://yt3.ggpht.com/5qZBrQDYBclJL7LZlKNWYFmi2cCCo5wq5TFdxh0d2e9MJCfcGkKKavRd4-vGj5YcjNumjNWw=s88-c-k-c0x00ffffff-no-rj'></img><p>Divine Dharohar</p></Link>  
          <Link  to='/likedvideos' className={currentMenu === "likedvideos" ? "Link_active":"Link_not_active"} onClick={()=>dispatch(menu("likedvideos"))}><img src='https://yt3.ggpht.com/ytc/AIdro_lXfB27QXHi7oe3GHZm2DaL8uzKmqj92P_0NNnMcUdEvg=s88-c-k-c0x00ffffff-no-rj'></img><p>BornCG</p></Link>  


        </div>
        <div className='links_connections'>
          <Routes>
            <Route path='/' element={<Home bars={bars}videoPlaying={videoPlaying} setVideoPlaying = {setVideoPlaying}></Home>}></Route>
            <Route path='/shorts' element={<Shorts></Shorts>}></Route>
            <Route path='/subcriptions' element={<Subcriptions></Subcriptions>}></Route>
            <Route path='/you' element={<You></You>}></Route>
            <Route path='/history' element={<History></History>}></Route>
            <Route path='/playlists' element={<PlayLists></PlayLists>}></Route>
            <Route path='/yourvideos' element={<YourVideos></YourVideos>}></Route>
            <Route path='/watchlater' element={<WatchLater></WatchLater>}></Route>
            <Route path='/likedvideos' element={<LikedVideos></LikedVideos>}></Route>
            <Route path='/video/:categoryId/:id' element={<Video videoPlaying={videoPlaying} setVideoPlaying={setVideoPlaying}></Video>}></Route>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
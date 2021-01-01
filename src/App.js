import React,{useState,useRef} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import data from './data';
import Library from './components/Library';
import Nav from './components/Nav';

function App() {
  const audioref = useRef(null);
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);

  const [songInfo,setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
});
const [libraryStatus, setLibraryStatus] = useState(false);
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  const roundedCurr = Math.round(current);
  const roundedDur = Math.round(duration);
  const animation = Math.round((roundedCurr/roundedDur)*100);
  setSongInfo({...songInfo,currentTime: current, duration, animationPercentage: animation});
}
const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if(isPlaying) audioref.current.play();
}
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player setIsPlaying={setIsPlaying}
      songs = {songs}
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
       isPlaying={isPlaying} 
       audioref = {audioref}
       setSongInfo={setSongInfo}
       songInfo = {songInfo}
       currentSong={currentSong}/>
       <Library
       audioref={audioref}
       libraryStatus={libraryStatus}
       setCurrentSong={setCurrentSong} 
       isPlaying={isPlaying}
       setSongs={setSongs}
       songs={songs}/>
                  <audio 
                    onLoadedMetadata={timeUpdateHandler}
                // so that page loads with actual duration 
                    onTimeUpdate={timeUpdateHandler} 
                    ref={audioref} 
                    onEnded={songEndHandler}
                    src={currentSong.audio}>
                </audio>
    </div>
    
  );
}

export default App;

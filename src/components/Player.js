import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleRight,faAngleLeft,faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({setSongs,setCurrentSong,songs,currentSong, isPlaying, setIsPlaying,setSongInfo,songInfo,audioref}) => {
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song)=> {
            if(song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true
                }; 
            }else {
                return {
                    ...song,
                    active: false
                };
            }
        });
        setSongs(newSongs);
    }
    const playSongHandler = () => {
        if(isPlaying)
        {
            audioref.current.pause();
            setIsPlaying(!isPlaying);
        }
        else {
            audioref.current.play();
            setIsPlaying(!isPlaying);
        }
    }
   
    
    //To convert time in minutes and seconds
    const getTime = (time) => {
        return (
            Math.floor(time/60) + ":" + ("0"+Math.floor(time%60)).slice(-2)
        )
    }
    const dragInput = (e) => {
        audioref.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    const skipTrack = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction==='skip-forward') {
           await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
           activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);

        } 
        if(direction==='skip-back') {
            if((currentIndex-1)%songs.length === -1) {
                await setCurrentSong(songs[songs.length-1]);
                activeLibraryHandler(songs[songs.length-1]);
                if(isPlaying) audioref.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        } 
        if(isPlaying) audioref.current.play();
    }
    const anim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background:`linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                <input min={0} 
                max={songInfo.duration || 0}
                value={songInfo.currentTime} 
                onChange={dragInput}
                type="range" />
                <div style={anim} className="animate-track"> </div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                onClick={()=> skipTrack('skip-back')}
                size="2x" 
                icon={faAngleLeft}/>
                <FontAwesomeIcon 
                onClick={playSongHandler} 
                className="play" 
                size="2x" 
                icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon 
                onClick={()=> skipTrack('skip-forward')}
                size="2x" 
                icon={faAngleRight}/>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default Player;
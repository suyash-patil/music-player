import React from 'react';
import Libsongs from './Libsongs';

const Library = ({songs, setCurrentSong,audioref,isPlaying,setSongs,libraryStatus}) => {

    return (
        <div  className={`library ${libraryStatus ? 'active-lib' : ''}`}>
            <h2 style={{textAlign:"center"}}>Library</h2>
            <div className="libsongs">
                {songs.map((song) => (
                    <Libsongs
                    setCurrentSong={setCurrentSong} 
                    songs={songs}
                    audioref={audioref}
                    id={song.id}
                    key={song.id}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                    song={song}/>
                ))}
            </div>
        </div>
    )

}
export default Library;
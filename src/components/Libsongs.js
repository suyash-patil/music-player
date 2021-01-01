import React from 'react';

const Libsongs = ({song, songs,setCurrentSong,id,audioref,isPlaying,setSongs}) => {
    const songSelector = async () => {
        await setCurrentSong(song);
        const newSongs = songs.map((song)=> {
            if(song.id === id) {
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
        if(isPlaying) audioref.current.play();
    }
    return (
        <div
        onClick={songSelector} 
         className={`library-song ${song.active ? 'selected' : ''}`}>
            <img alt={song.name} src={song.cover}/>
            <div className="song-details">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}
export default Libsongs;
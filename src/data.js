import {v4 as uuidv4} from 'uuid';

function SongList () {
    return [
          {
            name: "Indian Walk",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Nico Staf",
            audio: "https://github.com/suyash-patil/music-player/raw/main/src/audio/Indian%20Walk%20-%20Nico%20Staf.mp3",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
          },
          {
            name: "Jazz Cabbage",
            artist: "Ian Ewing, Strehlow",
            id: uuidv4(),
            cover: "https://f4.bcbits.com/img/a1775206490_16.jpg",
            audio: "https://mp3.chillhop.com/serve.php?mp3=9363",
            active: false,
            color: ["#ab417f","#205950"]
        },
          
          
          {
            name: "Lagoons",
            audio: "https://mp3.chillhop.com/serve.php?mp3=8266",
            id: uuidv4(),
            active: false,
            cover: "https://f4.bcbits.com/img/a0210750191_16.jpg",
            artist: "Strehlow, Chris Mazuera",
            color: ["#2ab3bf","2ab3bf"]
        },
          {
            name: "Daylight",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Keep Going",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Violet Vape",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Cheel",
            audio: "https://github.com/suyash-patil/music-player/raw/main/src/audio/Violet%20Vape%20-%20Cheel.mp3",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Reflection",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Under the City Stars",
            cover:
              "https://f4.bcbits.com/img/a0210750191_16.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
          },
    ];
}
export default SongList;
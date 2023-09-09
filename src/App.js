import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App(){
  const [songs] = useState([
    {
      title: "Unna vitta yenaku yaaru daa",
      artist: "Jen Martin",
      img_src: "./images/song-1.jpeg",
      src: "./music/DADA Song.mp3"
    },
    {
      title: "En Roja neeya",
     artist:"Hesham Abdul Wahab",
      img_src: "./images/song-2.jpg",
      src: "./music/En Roja neeye.mp3"
    },
    {
      title: "Love me little",
      artist: "Dhanush,Sharanya Srinivas",
      img_src: "./images/song-3.jpg",
      src: "./music/Little-Little.mp3"
    },
    {
      title: "Poovinai Thiranthu",
      artist: "ShreyaGhoshal,Srinivas",
      img_src: "./images/song4.jpg",
      src: "./music/Poovinai.mp3"
    }, {
      title: "Thiranthu",
      artist: "ShreyaGhoshal,Srinivas",
      img_src: "./images/song4.jpg",
      src: "./music/Poovinai.mp3"
    }, {
      title: "Poovinai ",
      artist: "ShreyaGhoshal,Srinivas",
      img_src: "./images/song4.jpg",
      src: "./music/Poovinai.mp3"
    }, {
      title: "",
      artist: "ShreyaGhoshal,Srinivas",
      img_src: "./images/song4.jpg",
      src: "./music/Poovinai.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1){
        return 0;
      } 
      else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;

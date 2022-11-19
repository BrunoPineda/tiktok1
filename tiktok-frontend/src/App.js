import axios from "./axios";
import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {

const [videos,setVideos] = useState([])

  useEffect(() => {
    async function fetchPost(){
      const responce = await axios.get('/v2/posts')
      setVideos(responce.data);

      return responce;

    }
    fetchPost();
  },[])

  console.log(videos);

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(({ url , channel , description , song , likes , messages , shares}) => (
          <Video
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          description={description}
          shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

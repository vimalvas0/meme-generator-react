import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import MemeImage from "./components/MemeImage/MemeImage";
import { useState } from "react";
import memesData from "./memesData";

function App() {
  const [imageFile, setFileImage] = useState(memesData.data.memes[0].url);
  const [topText, setTopText] = useState("Sample Text Top");
  const [bottomText, setBottomText] = useState("Sample bottom text");

  return (
    <>
      <div className="app-container">
        <Navbar />
        <Form setTopText={setTopText} setBottomText={setBottomText} setFileImage={setFileImage} />
        <MemeImage imageName={imageFile} topText={topText} bottomText={bottomText} />
      </div>
    </>
  );
}

export default App;

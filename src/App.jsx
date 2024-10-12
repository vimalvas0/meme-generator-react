import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import MemeImage from "./components/MemeImage/MemeImage";
import { useState } from "react";
import memesData from "./memesData";

function App() {
  const [imageFile, setFileImage] = useState("");
  const [topText, setTopText] = useState("Sample Text Top");
  const [bottomText, setBottomText] = useState("Sample bottom text");

  let randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
  setFileImage(memesData.data.memes[randomIndex].url);

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

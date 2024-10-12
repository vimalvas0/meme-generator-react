import "./Form.css";
import PropTypes from "prop-types";
import memesData from "../../memesData";

export default function Form({ setFileImage, setTopText, setBottomText }) {
  return (
    <div className="form form-container">
      <div className="form__header">
        <div className="input-group">
          <label htmlFor="top-text">Top Text</label>
          <input id="top-text" type="text" placeholder="Shut Up" />
        </div>
        <div className="input-group">
          <label htmlFor="bottom-text"> Bottom Text</label>
          <input id="bottom-text" type="text" placeholder="Take my money" />
        </div>
      </div>
      <button
        onClick={() => {
          let randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
          setFileImage(memesData.data.memes[randomIndex].url);
        }}
      >
        Get a new meme image
      </button>
      <button
        onClick={() => {
          setTopText(document.getElementById("top-text").value);
          setBottomText(document.getElementById("bottom-text").value);
        }}
      >
        Generate
      </button>
    </div>
  );
}

// props validation
Form.propTypes = {
  setFileImage: PropTypes.func.isRequired,
  setTopText: PropTypes.func.isRequired,
  setBottomText: PropTypes.func.isRequired,
};

import "./MemeImage.css";
import PropTypes from "prop-types";

export default function MemeImage({ imageName, topText, bottomText }) {
  return (
    <div className="meme-image">
      <img src={`${imageName}`} alt="meme" />
      <h4 className="meme-image-text top-text">{topText}</h4>
      <h4 className="meme-image-text bottom-text">{bottomText}</h4>
    </div>
  );
}

MemeImage.propTypes = {
  imageName: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
};

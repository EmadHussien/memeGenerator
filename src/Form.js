import React from "react";
//import memeData from "./memesData";

export default function Form() {
  const [allMemeData, setMemeAllImages] = React.useState({});
  const [imgState, setImageState] = React.useState(false);
  /*   const [url, setImage] = React.useState("");
   */ const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  React.useEffect(() => {
    async function getMemesApi() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setMemeAllImages(data);
    }
    getMemesApi();
  }, []);

  function imghandle(event) {
    let url = "";
    if (event.target.files.length !== 0) {
      url = URL.createObjectURL(event.target.files[0]);
    }
    // url = URL.createObjectURL(event.target.files[0]);

    if (url !== "") {
      setImageState(true);
      setMeme({
        ...meme,
        randomImage: url
      });
    }
  }
  function handleClick() {
    const memesArray = allMemeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const imgUrl = memesArray[randomIndex].url;
    setImageState(true);
    setMeme({
      ...meme,
      randomImage: imgUrl
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme({
      ...meme,
      [name]: value
    });
  }

  return (
    <div>
      <div className="form-class">
        <div className="form">
          <div className="input-container">
            <input
              type="text"
              className="input-text"
              onChange={handleChange}
              name="topText"
              value={meme.topText}
              placeholder="Enter top text"
            />
            <input
              type="text"
              className="input-text"
              onChange={handleChange}
              name="bottomText"
              value={meme.bottomText}
              placeholder="Enter bottom text"
            />
          </div>
          <button className="btn" onClick={handleClick}>
            Get a new random meme
          </button>
          <p className="upload-meme">Upload your own meme</p>
          <input
            type="file"
            name="uploadedImage"
            className="file"
            onChange={imghandle}
          />
        </div>
      </div>
      <div className="meme" style={{ display: imgState ? "block" : "none" }}>
        <img src={meme.randomImage} className="meme--img" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

/*
    if (url !== "") {
      setMeme({
        topText: "",
        bottomText: "",
        randomImage: url
      });
      return;
    }
   */

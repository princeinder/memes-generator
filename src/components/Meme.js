import React from "react";

const Meme = ({
  errors,
  meme,
  setFirstText,
  firstText,
  setSecondText,
  secondText,
  fontSize,
  setFontSize,
  submitMeme,
}) => {
  const { url } = meme;
  return (
    <div className="meme-editor">
      <div className="meme-image">
        <img src={url} height={300} width={300} />
      </div>
      <div className="meme-form">
        <div className="form-group">
          <label for="text1">Text1</label>
          <input
            className="text0 form-control"
            name="text1"
            value={firstText}
            required
            onChange={(e) => setFirstText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="text2">Text2</label>
          <input
            className="text2 form-control"
            name="text2"
            value={secondText}
            onChange={(e) => setSecondText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="fontSize">Font Size</label>
          <input
            className="fontSize form-control"
            type="number"
            name="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>
        <div className="action">
          <div className="form-error">
            <span className="error" style={{ color: "red" }}>
              {errors.input}
            </span>
          </div>
          <div className="form-action">
            <button
              className="btn btn-generator"
              type="button"
              name="generateMeme"
              value="Generate Meme"
              onClick={() => submitMeme(meme)}
            >
              Generate Meme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meme;

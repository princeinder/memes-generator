import React from "react";
import Modal from "react-modal";
import { SocialIcon } from "react-social-icons";
const Popup = ({ popup, meme, setPopup }) => {
  const { url, name } = meme;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={popup}
      style={customStyles}
      onRequestClose={() => setPopup(false)}
      contentLabel="Example Modal"
    >
      <div className="model-content">
        <div className="model-top">
          <img src={url} height={300} width={300} alt={url} />
        </div>
        <div className="model-bottom-links">
          <SocialIcon
            url={
              "https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=" +
              name +
              "&body=" +
              url +
              "&ui=2&tf=1"
            }
            target="_blank"
            network="google"
            style={{ height: 40, width: 40, margin: "5px" }}
          />
          <SocialIcon
            url={"https://in.pinterest.com/pin/create/button/?url=" + url}
            target="_blank"
            network="instagram"
            style={{ height: 40, width: 40, margin: "5px" }}
          />
          <SocialIcon
            url={"https://www.facebook.com/sharer/sharer.php?u=" + url}
            target="_blank"
            network="facebook"
            style={{ height: 40, width: 40, margin: "5px" }}
          />

          <SocialIcon
            url={
              "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=" +
              url +
              "&title=" +
              name
            }
            target="_blank"
            network="tumblr"
            style={{ height: 40, width: 40, margin: "5px" }}
          />
          <SocialIcon
            url={"https://www.reddit.com/submit?url=" + url + "&title=" + name}
            target="_blank"
            network="reddit"
            style={{ height: 40, width: 40, margin: "5px" }}
          />
        </div>
        <div className="model-bottom-link-button">
          <button className="btn btn-try" onClick={() => setPopup(false)}>
            Try Another
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;

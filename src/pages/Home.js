import React, { useState, useEffect } from "react";
import "./Home.css";
import Template from "../components/Template";
import Toolbar from "../components/Toolbar";
import Meme from "../components/Meme";
import Popup from "../components/Popup";
import Pagination from "../components/Pagination";

import { getMemeTemplates, generateMeme } from "../actions/index";

function Home() {
  const [loading, setLoading] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [search, setSearch] = useState("");
  const [meme, setMeme] = useState([]);
  const [popup, setPopup] = useState(false);
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [fontSize, setFontSize] = useState(50);
  const [errors, setErrors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [templatesPerPage] = useState(10);

  const [searchlist, setSearchList] = useState([]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      var res = await getMemeTemplates();
      setTemplates(res.data.memes);
      setMeme(
        res.data.memes[Math.floor(Math.random() * res.data.memes.length)]
      );
      setLoading(false);
    })();
  }, []);
  const indexOfLastPost = currentPage * templatesPerPage;
  const indexOfFirstPost = indexOfLastPost - templatesPerPage;
  const currentTemplates = searchlist.slice(indexOfFirstPost, indexOfLastPost);
  useEffect(() => {
    setSearchList(
      templates.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, templates]);
  const queryParams = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
  };

  const submitMeme = async (meme) => {
    if (!firstText || !secondText || !fontSize) {
      setErrors({ input: "All fields are  required.." });
      return;
    }
    setLoading(true);
    const params = {
      template_id: meme.id,
      text0: firstText,
      text1: secondText,
      max_font_size: fontSize + "px",
      username: "InderjitSIngh",
      password: "princeinder@30",
    };
    var res = await generateMeme(queryParams(params));
    meme["url"] = res.data.url;
    setMeme(meme);
    setPopup(true);
    setErrors({ input: "" });
    setLoading(false);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (loading) return <div className="container">Loading</div>;
  return (
    <div className="main">
      <div className="container">
        <Meme
          errors={errors}
          setFirstText={setFirstText}
          firstText={firstText}
          setSecondText={setSecondText}
          secondText={secondText}
          fontSize={fontSize}
          setFontSize={setFontSize}
          submitMeme={submitMeme}
          meme={meme}
        />
        <Popup popup={popup} meme={meme} setPopup={setPopup} />
        <Toolbar setSearch={setSearch} />
        <div className="list">
          {currentTemplates.map((item, idx) => (
            <Template key={idx} setMeme={setMeme} {...item} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          templatesPerPage={templatesPerPage}
          totalTemplates={searchlist.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Home;

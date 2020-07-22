const apiurl = "https://api.imgflip.com";
export function getMemeTemplates() {
  return fetch(`${apiurl}/get_memes`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}

export function generateMeme(params) {
  return fetch(`${apiurl}/caption_image${params}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}

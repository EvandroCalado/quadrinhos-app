import md5 from "md5";

export const links = {
  comics: "http://gateway.marvel.com/v1/public/comics",
};

// const publicKey = "eceb672db1778549de86d6e3c384cd84";
// const privateKey = "474432ea507a9f32065b321481a4599829ea0866";
const publicKey = "1dd940f58a8eda8aab610600433aa855";
const privateKey = "21eee23d317695acc3be5191dc8ea68cea755c57";
const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

export const getItems = async (url, offset = 0, limit = 100) => {
  const response = await fetch(
    `${url}?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`
  );
  return await response.json();
};

export const getZipcode = async (zipCode) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBeAc4m-1pl0SUMlazkoFZaAuzMjiKOwHU&address=${zipCode}`
  );
  return await response.json();
};

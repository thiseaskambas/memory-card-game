//
//
//
//
//
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../public/assets", false, /\.(png|jpe?g|svg)$/)
);

function convToArr(obj) {
  let newArr = [];
  for (let key in obj) {
    newArr.push({
      title: key.replace(".jpeg", ""),
      src: obj[key],
      id: newArr.length,
    });
  }
  return newArr;
}

const imagesArr = convToArr(images);

export default imagesArr;

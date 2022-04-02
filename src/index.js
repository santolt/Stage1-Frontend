console.log("#------- Puntos de la prueba Js ----------#");
console.log("#-----------------------------------------#");

let docs = [];

const getDataApi = async () => {
  try {
    return await fetch("https://api.plos.org/search?q=title:DNA")
      .then((response) => response.json())
      .then((json) => {
        docs = json.response.docs;
      });
  } catch (error) {
    console.log("Error de la peticion", error);
    throw error;
  }
};

const get = async () => {
  await getDataApi();
  console.log(docs);
};

get().then((x) => {});

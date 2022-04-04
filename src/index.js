console.log("#------- Puntos de la prueba Js ----------#");
console.log("#-----------------------------------------#");

let docs = [];
const api = "https://api.plos.org/search?q=title:DNA";

const getDataApi = async () => {
  try {
    return await fetch(api)
      .then((response) => response.json())
      .then((json) => {
        docs = json.response.docs;
      });
  } catch (error) {
    console.log("Error de la peticion", error);
    throw error;
  }
};

const orginalData = async () => {
  await getDataApi();
  console.log(docs);
};

orginalData();

//1. Develop a function that prints by console the data filtering by "article_type" and get allthe data that are different from "Research Article".○ Extra points, receive the value to filter by parameters.

const firstPoint = async (item) => {
  await getDataApi();

  try {
    const article = docs.filter((data) => data.article_type != item);
    return article;
  } catch (error) {
    console.log("Error!! Requeset not fount");
    throw error;
  }
};

firstPoint("Research Article").then((data) => console.log("1. data: ", data));

//2. Develop a function that prints by console all "author_display" with "score" greater than"6.0".○ Extra point, receive the value to be filtered by parameters.

const secondPoint = async (item) => {
  await getDataApi();

  const score = docs.filter((data) => data.author_display.length >= item);
  return score;
};

secondPoint(6).then((data) => console.log("2. data: ", data));

//3. Develop a function that gets the record with id "10.1371/journal.pgen.1006605" update"article_type" to "Newspaper" and print this by console.

const thirdPoint = async () => {
  await getDataApi();

  const newEndpoint = [...docs];
  let record = newEndpoint.find(
    (data) => data.id === "10.1371/journal.pgen.1006605"
  );
  const newsPaper = (record.article_type = "Newspaper");

  return newsPaper;
};

thirdPoint().then((data) => console.log("3. data: ", data));

//4.Develop a function that gets all the "article_type" without repeating and print it by console.

const fourthPoint = async () => {
  await getDataApi();

  let dataMap = docs.map((item) => [item.article_type, item]);
  let newDataArray = new Map(dataMap);
  let dataNoRepeat = [...newDataArray.values()];

  return dataNoRepeat;
};

fourthPoint().then((data) => console.log("4. data: ", data));

//5. Develop a function that concatenates all the "journal" and prints them by console. Extra point, print all the "journal" without repeating.

const fifthPoint = async () => {
  await getDataApi();

  const result = docs.map((item) => item.journal.toLowerCase());

  const journalSet = Array.from(new Set(result));

  return journalSet.join(" ");
};
fifthPoint().then((data) => console.log("5. data: ", data));

//6. Develop a function that removes a property of the array "docs" and prints the new array by console.

const sixthPont = async () => {
  await getDataApi();

  let deleteData = docs.map((item) => {
    return delete item.journal;
  });

  console.log(deleteData);
  return docs;
};

sixthPont().then((data) => console.log("6.Se elimino journal", data));

//7. Develop a function that prints by console only the records from id "10.1371/journal.pone.0047101" to "10.1371/journal.pgen.1000047".

const seventhPoint = async () => {
  await getDataApi();

  const [id0, id1, id2, id3, id4, id5, id6, id7, id8, id9] = docs;
  const records = [id2, id3, id4, id5, id6];
  return records;
};

seventhPoint().then((data) => console.log(`7. Data records:`, data));

//8. Develop a function that creates an array from the given "docs" and add the followingarray to it and print it to the console.

const eighthPoint = async () => {
  await getDataApi();

  const addData = docs.push({
    id: "10.1371/journal.pone.0177149",
    journal: "Wall Street",
    eissn: "1932-6203",
    publication_date: "2017-05-03T00:00:00Z",
    article_type: "Newspaper",
    author_display: [
      "Irina Bruck",
      "Nalini Dhingra",
      "Matthew P. Martinez",
      "Daniel L. Kaplan",
    ],
    abstract: [
      "\nDpb11 is required for the initiation of DNA replication inbudding yeast. We found that Dpb11 binds tightly to single-stranded DNA(ssDNA) or branched DNA structures, while its human homolog, TopBP1, binds tightly to branched-DNA structures. We also found that Dpb11 binds stably to CDK-phosphorylated RPA, the eukaryotic ssDNA binding protein, in the presence of branched DNA. A Dpb11 mutant specifically defective for DNA binding did not exhibit tight binding to RPA in the presence of DNA, suggesting that Dpb11-interaction with DNA may promote the recruitment of RPA to melted DNA. We then characterized a mutant of Dpb11 that is specifically defective in DNA binding in budding yeast cells. Expression of dpb11-m1,2,3,5,ΔC results in a substantial decrease in RPA recruitment to origins, suggesting that Dpb11 interaction with DNA may be required for RPA recruitment to origins. Expression of dpb11-m1,2,3,5,ΔC also results in diminished GINS interaction with Mcm2-7 during S phase, while Cdc45 interaction with Mcm2-7 is like wild-type. The reduced GINS interaction with Mcm2-7 may be an indirect consequence of diminished origin melting. We propose that the tight interaction between Dpb11, CDK-phosphorylated RPA, and branched-DNA may be required for the essential function of stabilizing melted origin DNA in vivo. We also propose an alternative model, wherein Dpb11-DNA interaction is required for some other function in DNA replicationinitiation, such as helicase activation.\n",
    ],

    title_display:
      "Dpb11 may function with RPA and DNA to initiate DNAreplication",
    id: "10.1371/journal.pgen.1006699",
    publication_date: "2017-02-10T00:00:00Z",
  });
  console.log(addData);
  return docs;
};

eighthPoint().then((data) => console.log("8. Data: ", data));

const ninethPoint = async () => {
  await getDataApi();

  let oddArray = [];

  for (let i = 0; i < docs.length; i++) {
    if (i % 2 === 1) {
      oddArray.push(docs[i]);
    }
  }

  const updateData = {
    title: {
      journal: oddArray.map((items) => items.journal),
      title_dislay: oddArray.map((items) => items.title_display),
    },
    score: oddArray.map((item) => item.score),
    article_type: oddArray.map((item) => item.article_type),
    authors: oddArray.map((item) => item.author_display.join(" - ")),
    id: oddArray.map((item) => item.id),
  };
  return updateData;
};

ninethPoint().then((data) => console.log("9. data: ", data));

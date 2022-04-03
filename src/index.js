
console.log('#------- Puntos de la prueba Js ----------#')
console.log("#-----------------------------------------#");


let docs = [];
const api= 'https://api.plos.org/search?q=title:DNA';  

const getDataApi = async()=>{
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
}



const orginalData = async()=> {
    await getDataApi()
    console.log(docs);
}

orginalData()

//1. Develop a function that prints by console the data filtering by "article_type" and get allthe data that are different from "Research Article".○ Extra points, receive the value to filter by parameters.

const firstPoint = async(item)=> {
    await getDataApi()

    try {
        const article = docs.filter(data => data.article_type != item)
        return article
        
    } catch (error) {
        console.log("Error!! Requeset not fount");
        throw error
    }
}

firstPoint("Research Article")
    .then(data=> console.log(data))


//2. Develop a function that prints by console all "author_display" with "score" greater than"6.0".○ Extra point, receive the value to be filtered by parameters.

const secondPoint = async(item)=> {
    await getDataApi()

    const score = docs.filter(data => (data.author_display.length >= item))
    return score
}

secondPoint(6)
    .then(data => console.log(data))



//3. Develop a function that gets the record with id "10.1371/journal.pgen.1006605" update"article_type" to "Newspaper" and print this by console.

const thirdPoint = async() => {
    await getDataApi()

    const newEndpoint =[...docs] 
    let record = newEndpoint.find(data => data.id === '10.1371/journal.pgen.1006605')
    const newsPaper = record.article_type = 'Newspaper'

    return newsPaper
}

thirdPoint()
    .then(data=> console.log(data))


//4.Develop a function that gets all the "article_type" without repeating and print it by console.

const fourthPoint = async () => {

    await getDataApi()

    let dataMap = docs.map( item =>  [item.article_type,item] )
    let newDataArray = new Map(dataMap)
    let dataNoRepeat = [...newDataArray.values()]

    return dataNoRepeat
}

fourthPoint()
    .then(data=> console.log(data))


//5. Develop a function that concatenates all the "journal" and prints them by console. Extra point, print all the "journal" without repeating.

// const fivethPoint =()=> {

//     await getDataApi()




// }

// firstPoint()
//     .then(data=> console.log(data))
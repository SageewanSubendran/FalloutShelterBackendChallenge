import {parse, v4 as uuidv4} from 'uuid';

/* Unit Testing Functionality */

let dwellers = [];

//Get dwellers test
export const getDwellersTest = (req, res) => {
    const filteredDwellers = dwellers.filter(dweller => {
        let isValid = true;
        isValid = isValid && dweller["age"] < 70;
        return isValid;
    });

    //Test if dwellers array is not null
    if(dwellers != null){
        res.status(200).send("Test Passed");
    } else {
        res.status(500).send("Test Failed");
    }
}

//Create dweller test
export const createDwellerTest = (req, res) => {
    const dweller = req.body;
    const dwellerID = uuidv4();
    const dwellerWithID = {... dweller, id: dwellerID}
    dwellers.push(dwellerWithID);
    
    //Test if dweller id is not null
    if(dwellerWithID != null){
        res.status(200).send("Test Passed");
    } else {
        res.status(500).send("Test Failed");
    }
}

//Get dweller info test
export const getDwellerInfoTest = (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const founddweller = dwellers.find((dweller) => dweller.id == id);

    //Test if dweller exists based off of provided ID
    if(founddweller != null){
        res.status(200).send("Test Passed");
    } else {
        res.status(500).send("Test Failed");
    }
}

//Get search result test
export const getSearchResultTest = (req, res) => {
    let filters = req.query;
    console.log(filters);
    let key;

    const filteredUsers = dwellers.filter(dweller => {
    let isValid = true;

    for (key in filters) {
        if (key == "haircolor" || key == "eyecolor" || key == "age"){
            console.log(key, dweller[key], filters[key]);
            isValid = isValid && dweller[key] == filters[key] && dweller["age"] < 70;
        }
        
        if (key == "agegt"){
            console.log(key, dweller["age"], filters[key]);
            isValid = isValid && dweller["age"] > filters[key] && dweller["age"] < 70;
        }

        if (key == "agelt"){
            console.log(key, dweller["age"], filters[key]);
            isValid = isValid && dweller["age"] < filters[key] && dweller["age"] < 70;
        }

        if (key == "name"){
            const nameString = JSON.stringify(dweller[key]);
            console.log(key, nameString, filters[key]);
            console.log(nameString.includes(filters[key]));
            isValid = isValid && nameString.includes(filters[key]) && dweller["age"] < 70;
        }

    }

    return isValid; 
    
    });

    //Test if filtered users exist or if filtered users is null
    if (!filteredUsers || filteredUsers == null){
        res.status(500).send("Test Failed");
    } else {
        res.status(200).send("Test Passed");
    }
}

//Move time forward, increases age of dwellers by numbers of years passed
export const addYearsTest = (req, res) => {
    const { years } = req.params;
    const agedDwellers = dwellers.filter(dweller => {
        let isValid = true;
        dweller["age"] = parseInt(dweller["age"]) + parseInt(years);
        console.log(dweller["age"]);
        isValid = isValid && dweller["age"] < 70;
        return isValid;
    });

    //Test if dwellers exist after time has passed, and checks if years added is above 0.
    if (!agedDwellers || agedDwellers == null || years < 0){
        res.status(500).send("Test Failed");
    } else {
        res.status(200).send("Test Passed");
    }
    
}
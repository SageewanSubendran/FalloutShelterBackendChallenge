import {parse, v4 as uuidv4} from 'uuid';

export let dwellers = [];


//Get list of dwellers that are alive (under the age of 70)
export const getDwellers = (req, res) => {
    //list of dwellers that are alive (under age of 70)
    const filteredDwellers = dwellers.filter(dweller => {
        let isValid = true;
        isValid = isValid && dweller["age"] < 70;
        return isValid;
    });
    res.status(200).send(filteredDwellers);
}

//Create dweller
export const createDweller = (req, res) => {
    //user object
    const dweller = req.body;
    
    //user ID ('npm install uuid' to use uuidv4())
    const dwellerID = uuidv4();
    const dwellerWithID = {... dweller, id: dwellerID}
    
    //add user to list of users in database
    dwellers.push(dwellerWithID);
    
    //send statement to postman
    res.send(`Dweller with the name ${dweller.name} added to the database.`);
    
    //Show list of dwellers in console log
    console.log(dwellers);
}

//Get dweller info by (via ID only)
export const getDwellerInfo = (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    //find dweller with the matching id provided
    const founddweller = dwellers.find((dweller) => dweller.id == id);
    res.send(founddweller);
}

//Get Search Result (any search query)
export const getSearchResult = (req, res) => {
    let filters = req.query;
    console.log(filters);
    let key;
    //let operator = ["gt", "lt", "et"];
    const filteredUsers = dwellers.filter(dweller => {
    let isValid = true;

    //filter through parameters
    for (key in filters) {
        //search filter for 'equals to' comparisons
        if (key == "haircolor" || key == "eyecolor" || key == "age"){
            console.log(key, dweller[key], filters[key]);
            isValid = isValid && dweller[key] == filters[key] && dweller["age"] < 70;
        }
        
        //search filter for age greater than
        if (key == "agegt"){
            console.log(key, dweller["age"], filters[key]);
            isValid = isValid && dweller["age"] > filters[key] && dweller["age"] < 70;
        }

        //search filter for age less than
        if (key == "agelt"){
            console.log(key, dweller["age"], filters[key]);
            isValid = isValid && dweller["age"] < filters[key] && dweller["age"] < 70;
        }

        //search filter for name
        if (key == "name"){
            //turning dweller name into a string
            const nameString = JSON.stringify(dweller[key]);
            //Key, dweller name, filter 
            console.log(key, nameString, filters[key]);
            //Check if filter matches dwellers in cave
            console.log(nameString.includes(filters[key]));

            //filter dwellers to find substring match
            isValid = isValid && nameString.includes(filters[key]) && dweller["age"] < 70;
        }

    }
        return isValid;
    });
    res.send(filteredUsers);
}

//Move time forward, increases age of dwellers by numbers of years passed
export const addYears = (req, res) => {
    const { years } = req.params;
    
    //Filter through each dweller that is alive and increase their age by number of years passed
    const agedDwellers = dwellers.filter(dweller => {
        let isValid = true;
        dweller["age"] = parseInt(dweller["age"]) + parseInt(years);
        console.log(dweller["age"]);
        isValid = isValid && dweller["age"] < 70;
        return isValid;
    });
    res.send(agedDwellers);
}


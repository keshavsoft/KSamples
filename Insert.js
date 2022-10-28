let fs = require("fs");

var randomWords = require('random-words');


let StartFunc = async () => {
    let LocalFilePath = "KData/JSON/1018/Data/Masters/Accounts.json";

    let LocalDataFromJSON = await fs.readFileSync(LocalFilePath);
    let LocalJsonData = JSON.parse(LocalDataFromJSON);

    let k2 = {};
    k2.AccountsNames = {};

    randomWords(50000).forEach((LoopItem, LoopIndex) => {
        k2.AccountsNames[LoopIndex + 1] = { CustomerName: LoopItem };
    });

    //console.log("LocalJsonData : ", LocalDataToInsert);

    await fs.writeFileSync(LocalFilePath, JSON.stringify(k2));

};

StartFunc().then();

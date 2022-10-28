let fs = require("fs");

var randomWords = require('random-words');

let StartFunc = async () => {
    let LocalFilePath = "KData/JSON/2022/Data/Masters/Customers.json";

    let k2 = { CustomerNames: {} };

    randomWords(50000).forEach((LoopItem, LoopIndex) => {
        k2.CustomerNames[LoopIndex + 1] = { CustomerName: LoopItem };
    });

    await fs.writeFileSync(LocalFilePath, JSON.stringify(k2));

};

StartFunc().then();

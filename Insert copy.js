import { getRandomInt } from "./RandomMobile.js";
import * as fs from 'node:fs';
//let fs = require("fs");
const { randomWords } = 'random-words';

//var randomWords = require('random-words');

let StartFunc = async () => {
    // let LocalFilePath = "KData/JSON/2022/Data/Masters/Customers.json";

    let LocalFilePath = "Customers.json";

    let k2 = { CustomerNames: {} };

    randomWords(50000).forEach((LoopItem, LoopIndex) => {
        k2.CustomerNames[LoopIndex + 1] = {
            CustomerName: LoopItem,
            Mobile: getRandomInt(6000000001, 9999999999)
        };
    });

    await fs.writeFileSync(LocalFilePath, JSON.stringify(k2));

};

StartFunc().then();

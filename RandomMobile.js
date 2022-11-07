function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};


module.exports = { getRandomInt };
//let Result = getRandomInt(6000000001, 9999999999)

//console.log('Result : ', Result);
const faker = require("faker");
const db = require("../db");

const fakeNum = (min, max) => {
  let arbituaryLength = faker.datatype.number({ min, max });
  return arbituaryLength;
};

const fakeWord = (min, max) => {
  let fakeWord = faker.lorem.word(fakeNum(min, max));
  return fakeWord;
};

const isObject = (val) => {
  let checkObj = val === null ? false : "object";
  return checkObj;
};

const thisExists = async (val, col, tableName) => {
  let query = await db
    .select("*")
    .from(tableName)
    .where({ [col]: val });
  // console.log("query:", query);
  return query === undefined ? false : true;
};

const seedCreater = async (
  columnTypeList,
  columnNamesList,
  minSeeds,
  maxSeeds,
  tableName
) => {
  // columnTypeList = [str, int, {foreignkey: 123}, bool]
  // Empty array to store fake inserts
  let fakeSeeds = [];

  // Loop thru x amount of times, creating fake data
  let arbituaryCount = fakeNum(minSeeds, maxSeeds);
  for (let i = 0; i < arbituaryCount; i++) {
    // depending on column type, will generate a different type of fake data

    let fakeData = await Promise.all(
      columnTypeList.map(async (columnType, i) => {
        if (columnType === "str") {
          return fakeWord(3, 10);
        } else if (columnType === "int") {
          return fakeNum(1, 5);
        } else if (columnType === "bool") {
          return faker.datatype.boolean();
        } else if (isObject(columnType)) {
          // Generates a random number
          // Checks it against the db
          // If exists, returns the number,
          // If not, generates a new number and repeat check

          let checkFK = async (num) => {
            if (await thisExists(num, columnNamesList[i], tableName)) {
              return num;
            } else {
              num = fakeNum(columnType.min, columnType.max);
              await checkFK(num);
            }
          };

          let fkData = fakeNum(columnType.min, columnType.max);
          let result = await checkFK(fkData);
          return result;
        }
      })
    );

    // combine column headers with the fake data
    let fakeObj = {};
    for (let i = 0; i < columnNamesList.length; i++) {
      fakeObj[columnNamesList[i]] = fakeData[i];
      // console.log(columnNamesList[i], fakeObj[columnNamesList[i]]);
    }
    fakeSeeds.push(fakeObj);
  }

  // return a list of fake inserts
  // console.log("fakeSeeds:", fakeSeed);
  return fakeSeeds;
};

module.exports = { seedCreater };

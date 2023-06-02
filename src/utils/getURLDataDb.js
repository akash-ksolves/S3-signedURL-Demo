const conn = require("../DB");

// const getURLDataDB = async () => {
//   try {
//     let data = [];
//     const query = "SELECT id, objectKey FROM URLDATA";
//     const abc = await conn.query(query, (err, rows) => {
//       if (err) throw err;
//       return rows;
//     });
//     console.log({ abc });
//     console.log("22222", { data });

//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

const createURLDataDB = async (data) => {
  try {
    const { objectKey } = data;
    const query = `INSERT INTO URLDATA(objectKey) VALUES('${objectKey}')`;
    conn.query(query, (err, result) => {
      if (err) throw err;
      data = result;
      // console.log({ result });
    });
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = { createURLDataDB };

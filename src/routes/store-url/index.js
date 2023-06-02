const { createURLDataDB } = require("../../utils/getURLDataDb");
const conn = require("../../DB");

const getURLData = async (req, res) => {
  const query = "SELECT id, objectKey FROM URLDATA";

  conn.query(query, (err, rows) => {
    if (err) {
      console.error("Error executing MySQL query: ", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    return res.json(rows);
  });
};
const createURLData = async (req, res) => {
  try {
    const data = await createURLDataDB(req.body);
    return res.json({ data });
  } catch (error) {
    return res.json({ error });
  }
};

module.exports = { getURLData, createURLData };

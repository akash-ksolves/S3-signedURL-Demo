const {
  createURLDataDB,
  getURLDataDB,
  deleteURLDataById,
  getURLDataDBById,
  updateURLDataById,
  updateURLDataDBById,
  deleteURLDataDBById,
} = require("../../utils/getURLDataDb");

const createURLData = async (req, res) => {
  try {
    const data = await createURLDataDB(req.body);
    return res.json({ data });
  } catch (error) {
    return res.json({ error });
  }
};

const getURLData = async (req, res) => {
  try {
    const data = await getURLDataDB();
    if (!data) return res.status(404).json({ message: "Data not found..!" });
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getURLDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getURLDataDBById(id);
    if (!data) return res.status(404).json({ message: "Data not found..!" });
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateURLData = async (req, res) => {
  try {
    const data = await updateURLDataDBById(req.body, req.params.id);
    if (!data) return res.status(404).json({ message: "Data not found..!" });
    return res.status(200).json({ message: "Data updated..!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteURLData = async (req, res) => {
  try {
    const data = await deleteURLDataDBById(req.params.id);
    if (!data) return res.status(404).json({ message: "Data not found..!" });
    return res.status(200).json({ message: "Data deleted..!!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  createURLData,
  getURLData,
  getURLDataById,
  updateURLData,
  deleteURLData,
};

const { UrlData } = require("../../models/urlData");
const createURLData = async (req, res) => {
  try {
    const data = await UrlData.create({
      ...req.body,
    });
    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getURLData = async (req, res) => {
  try {
    const data = await UrlData.findAll();
    if (data && !data.length > 0)
      return res.status(404).json({ data: [], message: "Data not found..!" });
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getURLDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UrlData.findOne({ where: { id: req.params.id } });
    if (!data)
      return res.status(404).json({ data: [], message: "Data not found..!" });
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateURLData = async (req, res) => {
  try {
    const data = await UrlData.update(
      { ...req.body },
      { where: { id: req.params.id } }
    );

    if (data && !data.length > 0)
      return res.status(404).json({ data: [], message: "Data not found..!" });
    return res.status(200).json({ message: "Data updated..!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteURLData = async (req, res) => {
  try {
    const data = await UrlData.destroy({
      where: { id: req.params.id },
    });
    if (!data)
      return res.status(404).json({ data: [], message: "Data not found..!" });
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

const { UrlData } = require("../models/urlData");

const createURLDataDB = async (body) => {
  try {
    const data = await UrlData.create({
      ...body,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const getURLDataDB = async () => {
  try {
    const data = await UrlData.findAll();
    return data;
  } catch (error) {
    throw error;
  }
};

const getURLDataDBById = async (id) => {
  try {
    const data = await UrlData.findByPk(id);
    return data;
  } catch (error) {
    throw error;
  }
};

const updateURLDataDBById = async (body, id) => {
  try {
    const data = await UrlData.update({ ...body }, { where: { id } });
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteURLDataDBById = async (id) => {
  try {
    const data = await UrlData.destroy({
      where: { id },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createURLDataDB,
  getURLDataDB,
  getURLDataDBById,
  updateURLDataDBById,
  deleteURLDataDBById,
};

const { DataTypes } = require("sequelize");
const { sequelize } = require("../DB");
const UrlData = sequelize.define("urldata", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  objectKey: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  signedurl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("urldata table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = { UrlData };

const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});
const s3 = new AWS.S3();

const bucket = process.env.ASSET_BUCKET;

const uploadObject = (req, res) => {
  try {
    const { id } = req.params;
    const { objectKey } = req.body;
    const objectParams = {
      Key: `${id}/${objectKey}`, // path to upload
      Bucket: bucket, // pass your bucket name
      Expires: 60 * 5, // 5 minutes
      // Body: data,
    };
    s3.getSignedUrl("putObject", objectParams, (error, data) => {
      if (error) {
        return res
          .status(500)
          .json({ status: "error", message: error.message });
      }
      return res.status(200).json({ status: "ok", data });
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const getPresignedURL = (req, res) => {
  try {
    const { id } = req.params;
    const { objectKey } = req.body;
    const objectParams = {
      Key: `${id}/${objectKey}`, // path to upload
      Bucket: bucket, // pass your bucket name
      Expires: 60 * 5, // 5 minutes
      // Body: data,
    };
    s3.getSignedUrl("getObject", objectParams, (error, data) => {
      if (error) {
        return res
          .status(500)
          .json({ status: "error", message: error.message });
      }
      return res.status(200).json({ status: "ok", data });
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = { uploadObject, getPresignedURL };

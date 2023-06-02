const { getPresignedURL, uploadObject } = require("./aws-signed-url");
const { getURLData, createURLData } = require("./store-url");

const router = require("express").Router();

router.route("/s3-signed-url/:id").get(getPresignedURL).put(uploadObject);

router.get("/s3-signed-url/image", getPresignedURL);
// router.put("/:tenant", uploadObject);

router.route("/url-data").get(getURLData).post(createURLData);

module.exports = router;

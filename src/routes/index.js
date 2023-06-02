const { getPresignedURL, uploadObject } = require("./aws-signed-url");

const router = require("express").Router();

router.route("/:id").get(getPresignedURL).put(uploadObject);

router.get("/image", getPresignedURL);
// router.put("/:tenant", uploadObject);

module.exports = router;

require('dotenv').config();
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});

async function getObjectURL(key) {
    const command = new GetObjectCommand({
        Bucket: 'niravvideoupload',
        Key: key,
    });
    const url = await getSignedUrl(s3Client, command);
    return url;
}

const getURL = () => {
    return getObjectURL('images/Screenshot.png');
};

module.exports = {
    getURL,
};

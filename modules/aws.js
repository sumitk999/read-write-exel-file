const fs = require('fs');
const AWS = require('aws-sdk');

const ID = "AKIATG4F2BHCACKBHVVK";
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'excelsheets110';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

// const params = {
//     Bucket: BUCKET_NAME,
//     CreateBucketConfiguration: {
        // Set your region here
//         LocationConstraint: "eu-west-1"
//     }
// };

// s3.createBucket(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log('Bucket Created Successfully', data.Location);
// });

//http://excelsheets110.s3.amazonaws.com/

const uploadFile = async(file, filename) => {
    console.log(file);
    const fileContent = fs.readFileSync(file);
    const params = {
        Bucket: BUCKET_NAME,
        Key: filename, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
 const a = await s3.upload(params).promise()
    // console.log(d);

    return a
}



module.exports = { uploadFile }
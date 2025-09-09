import multer from "multer";
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env);

aws.config.update({
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
});

const s3 = new aws.S3();

//till here we have configured s3 here

//now we'll configure upload here

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        }
    })
});

export default upload
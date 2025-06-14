import {v2 as cloudnary} from "cloudnary"
import fs from "fs"


cloudnary.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudnary
        const response = await cloudnary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // file has been uploader successfull
        //console.log("file is uploaded on cloudnary ", response.url);
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file
        return null;
    }
}


export {uploadOnCloudinary}
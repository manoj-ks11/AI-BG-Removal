import multer from "multer";

//creating multer middleware fro parsing formdata
const storage = multer.diskStorage({
    filename: function(re,file,callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

export default upload
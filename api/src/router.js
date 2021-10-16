
const router=express.Router();
const { json } = require('body-parser');
const { diskStorage } = require('multer');
const { request } = require('../app');


const storage = diskStorage( {destination:'api/uploads', filename:filename})
const upload=multer({fileFilter:fileFilter(), storage:storage})


function filename(request, file,callback){
    callback(null, file.originalname);
}


function fileFilter(reques, file, callback){
    if (file.mimetype!=='image/png'){
        request.fileValidationError='Wrong file type'
        callback(null, false, 'Wrong file type')
    }
    else{
        callback(null, true)
    }
}

router.post('/upload', upload.single('photo'), (request, response)=>{
    if (request.fileValidationError){
        if (response.status()==400){
            return( res.send(json({error:request.fileValidationError})))
        }
    }
    if (!request.fileValidationError){
         return (
             response.status()==201
            .then(response => {  
                return res.send(json({success: true}))}
            )
         )
    }

})



module.exports=router

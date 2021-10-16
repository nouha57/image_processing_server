

const express=require('express')
//const { diskStorage } = require('multer')
const path=require('path')
const multer = require('multer');
const app=express()
const router=require('./src/router')
//const storage = diskStorage( {destination:'api/uploads', filename:filename})


const pathToIndex=path.resolve(__dirname, '../client/index.html')

app.use('/*', (request, response)=> {
   response.sendFile(pathToIndex)
}
)

app.use('/', router,  (request, response)=> {

})

app.use(express.static(path.resolve(__dirname, 'uploads')))

module.exports=app;
const http =require ('http')
const path=require('path')
const fs=require('fs')

const server = http.createServer((req,res)=>{

    if (req.url==='/'){
        fs.readFile(path.join(__dirname,'public','index.html'), (err,data)=>{
            if (err) throw(err);
            res.writeHead(200,{'content-Type':'text/html'})
            res.end(data)
        })
    }

    if (req.url==='/about'){
        fs.readFile(path.join(__dirname,'public','about.html'), (err,data)=>{
            if (err) throw(err);
            res.writeHead(200,{'content-Type':'text/html'})
            res.end(data)
        })
    }
    if (req.url==='/api/users'){
        const users=[
            {name :'Abir', age: 22},
            {name :'Alaeddine', age: 23}
        ] 
            res.writeHead(200,{'content-Type':'text/html'})
            res.end(JSON.stringify(users))
    }
})

PORT= process.env.PORT || 4051;

server.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
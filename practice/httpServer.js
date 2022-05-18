const path = require('path');
const fs = require('fs');
const http = require('http');
const url =  require('url');




// function getPets (index){
//   fs.readFileSync(('pets.json', 'utf8', (err, data)=>{
//     if (err) throw err
//     let pets = JSON.parse(data)
//     if (index === undefined){
//       return JSON.stringify(pets);
//     } else {
//       return JSON.stringify(pets[index]);
//     }
//   }))
// }

const server = http.createServer((req, res) => {
  if(req.url === '/pets/2' || req.url === '/pets/-1'){
    res.writeHead(200, {'Content-Type': 'plain text'})
    res.end('<h1>404 not found<h2>')
  } else if(req.url === '/pets/0') {
    fs.readFile('pets.json', 'utf-8', (err, data) =>{
      if (err) throw err;
      let content = JSON.parse(data)
      let strObj0 = JSON.stringify(content[0])
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(strObj0)
    })
  }
  else if (req.url === '/pets/1'){
    fs.readFile('pets.json', 'utf-8', (err, data) =>{
        if (err) throw err;
        let content = JSON.parse(data)
        let strObj1 = JSON.stringify(content[1])
        console.log(strObj1)
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(strObj1)
    })
  }
  else if(req.url === '/pets'){
    fs.readFile('pets.json', 'utf-8', (err, data) =>{
      if (err) throw err;
      let content = JSON.parse(data)
      console.log(content[0], content[1])
      let strObj = JSON.stringify(content)
      console.log(strObj)
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(strObj)
    })
  }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
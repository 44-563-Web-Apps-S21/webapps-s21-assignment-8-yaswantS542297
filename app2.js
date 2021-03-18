const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table><tr><th>Location</th>')
      res.write('<th>Hours</th>')
      res.write('<th>Money</th>')
     
      res.write('<tr>')
      res.write('<td>mysore palace</td>')
      res.write('<td>3</td>')
      res.write('<td>&#36; 300</td>')
      res.write('</tr>')


      res.write('<tr>')
      res.write('<td>Golden Temple</td>')
      res.write('<td>2</td>')
      res.write('<td>&#36; 200</td>')
      res.write('</tr>')
      
      
      res.write('<tr>')
      res.write('<td>Ellora & Ajanta caves</td>')
      res.write('<td>5</td>')
      res.write('<td>&#36; 300</td>')
      res.write('</tr>')


      res.write('<tr>')
      res.write('<td>Taj Mahal</td>')
      res.write('<td>4</td>')
      res.write('<td>&#36; 500</td>')
      res.write('</tr>')        
      res.write('</table>')      
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})
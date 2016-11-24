const express = require();
const app = express();
const PORT = 3001;

app.get('/', function(req, res){
  res.send("hello word")
});
app.listen(PORT, function(){
  console.log("server listening");
});

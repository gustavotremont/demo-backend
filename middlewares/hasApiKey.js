const hasApiKey = (req,res,next) => {
    if(req.query.API_KEY && req.query.API_KEY=="hola123"){
      next();
    }
    else {
      const data = {
        message:"API KEY no válida o inexistente",
        url:"https://i.pinimg.com/originals/75/17/10/7517102abcd06433c5f0bcf8e199a14a.jpg"
      }
      res.status(403).render("error",data);
    }
}

module.exports = hasApiKey;
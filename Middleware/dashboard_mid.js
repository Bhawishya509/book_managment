const verifydash = (req, res, next) => {
    const { title,author,prize,category} = req.body;
    if (
      title == undefined ||
      author == undefined ||
      prize == undefined ||
      category == undefined ||
      author.length < 3 ||
      title.length<3||
      prize < 0 ||
      category < 3 
    ) {
      res.redirect("/dashboard_ui");
    } else next();
  };
  export { verifydash }; 
  
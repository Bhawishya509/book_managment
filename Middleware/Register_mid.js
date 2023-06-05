const verify = (req, res, next) => {
  const { name, email, password, username, number } = req.body;
  if (
    name == undefined ||
    email == undefined ||
    password == undefined ||
    username == undefined ||
    number.length < 10 ||
    number.length>10||
    number == undefined ||
    password.length < 6 ||
    name < 3 ||
    username < 3 ||
    number[0] <= 5
  ) {
    res.redirect("/register_ui");
  } else next();
};
export { verify };

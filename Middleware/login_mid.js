const verifypass = (req, res, next) => {
  let {username,email,password}=req.cookies
  if (password !== undefined && email !== undefined || password !== undefined && username !== undefined) {
    res.redirect("/dashboard_ui");
  }
  else {
    const { anydata, password } = req.body;

    if (
      anydata == undefined && username == undefined ||
      password == undefined ||
      password.length < 6
    ) {
      res.redirect("/login_ui");
    } else next();
  }
};
export { verifypass };

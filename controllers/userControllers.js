import User from "../models/User.js";

export const postRegisterUser = async (req, res) => {
  const { name, email, age, password1, password2 } = req.body;
  if (password1 === password2) {
    try {
      const newUser = await User.create({
        name: name,
        email: email,
        age: age,
      });
      console.log(newUser);
    } catch (e) {
      console.log(e);
    }
    res.redirect("/");
  } else {
    res.redirect("/register/user");
  }
};

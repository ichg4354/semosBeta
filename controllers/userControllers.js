import User from "../models/User.js";

export const postRegisterUser = async (req, res) => {
  const { name, email, age } = req.body;
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
};

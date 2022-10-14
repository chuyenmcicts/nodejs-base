import db from "../models/index";

const getHomePage = (rep, res) => {
  return res.render("homepage.ejs");
};

const getUser = async (req, res) => {
  try {
    const data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getHomePage: getHomePage, getUser: getUser };

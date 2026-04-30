const getProtectedData = (req, res) => {

  res.json({
    message: "This is protected data",
    user: req.user
  });

};

module.exports = { getProtectedData };
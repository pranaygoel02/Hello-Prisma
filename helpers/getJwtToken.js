const jwt = require("jsonwebtoken");

const getJwtToken = (user) => {
  const payload = {
    user: {
      id: user.id,
    },
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1 day" });
};

module.exports = getJwtToken;
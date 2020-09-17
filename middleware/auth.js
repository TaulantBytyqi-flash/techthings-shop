
let auth = (req, res ) => {
  let token = req.cookies.w_auth;

  return res.json({
    token,
    user: {_id, username, email, role },
});
};

  const payload = {
    user : {
        _id: user._id,
    },
};


module.exports = { auth };

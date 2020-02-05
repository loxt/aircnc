const UserSchema = require('../models/UserSchema');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await UserSchema.findOne({ email });

    if (!user) {
      const user = await UserSchema.create({ email });
      return res.json(user);
    }

    return res.json(user);
  }
};

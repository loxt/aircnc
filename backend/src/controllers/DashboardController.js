const SpotSchema = require('../models/SpotSchema');

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const spots = await SpotSchema.find({ user: user_id });

    return res.json(spots);
  }
};

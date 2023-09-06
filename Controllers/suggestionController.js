const User = require("../models/User");

const getSuggestions = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const regex = new RegExp(searchTerm, "i");
    const users = await User.find({
      $or: [
        { firstname: { $regex: regex } },
        { lastname: { $regex: regex } },
      ],
    }).limit(10);

    if (users.length === 0) {
      return res.json({ message: "No match found" });
    }

    const suggestions = users.map((user) => ({
      name: `${user.firstname} ${user.lastname}`,
      phone: user.phone,
      address: user.address,
    }));

    res.json({ suggestions });
  } catch (error) {
    console.error("Error in getSuggestions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getSuggestions,
};

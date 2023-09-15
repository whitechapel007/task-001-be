const Person = require("./model");

async function createUser(req, res) {
  const { name } = req.body;
  console.log(name);

  try {
    if (!name) {
      return res.status(400).json({ error: "Invalid user data" });
    }

    const person = await Person.create({ name });

    res.status(201).json(person);
  } catch (error) {
    // Check for a duplicate key error (name is not unique)
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      return res.status(400).json({ error: "Name must be unique" });
    }

    console.error("Error creating person:", error);
    res.status(500).json({ error: "Failed to create person" });
  }
}

async function getUser(req, res) {
  const { user_id } = req.params;
  try {
    const person = await Person.findOne({ _id: user_id });
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }

    res.json(person);
  } catch (error) {
    console.error("Error fetching person:", error);
    res.status(500).json({ error: "Failed to fetch person" });
  }
}

async function updateUser(req, res) {
  const { user_id } = req.params;

  const { name } = req.body;

  try {
    const person = await Person.findByIdAndUpdate(
      { _id: user_id },
      { name },
      { new: true }
    );

    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }

    res.json(person);
  } catch (error) {
    console.error("Error updating person:", error);
    res.status(500).json({ error: "Failed to update person" });
  }
}

async function deleteUser(req, res) {
  const { user_id } = req.params;

  try {
    const removedPerson = await Person.findOneAndDelete({ _id: user_id });
    if (!removedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }

    res.json(removedPerson);
  } catch (error) {
    console.error("Error deleting person:", error);
    res.status(500).json({ error: "Failed to delete person" });
  }
}
module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};

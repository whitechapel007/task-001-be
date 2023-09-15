const Person = require("./model");

async function createUser(req, res) {
  const { name, email, phoneNo, age } = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({ error: "Invalid user data" });
    }

    const person = await Person.create({ name, age, phoneNo, email });

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
  const { name } = req.params;
  try {
    const person = await Person.findOne({ name });
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
  const { name } = req.params;

  const { age, phoneNo, email } = req.body;

  try {
    const person = await Person.findByIdAndUpdate(
      { name },
      { age, phoneNo, email },
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
  const { name } = req.params;

  try {
    const removedPerson = await Person.findOneAndDelete({ name });
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

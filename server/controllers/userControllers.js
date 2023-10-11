const Users = require('../model/User');

// get users
const getDashboardUsers = async (req, res) => {
    try {
        const users = await Users.find();
        console.log('users are', users)

        if (!users) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// post user
const postUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        const newUser = new Users({
            name,
            email,
            phone,
        });
        console.log(newUser)
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Edit User
const editUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { name, email, phone } = req.body;

        const updatedUser = await Users.findByIdAndUpdate(userId, { name, email, phone }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        const deletedUser = await Users.findByIdAndRemove(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getDashboardUsers, postUser, editUser, deleteUser };

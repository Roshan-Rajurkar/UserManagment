
const express = require('express');
const { getDashboardUsers, postUser, editUser, deleteUser } = require('../controllers/userControllers');
const router = express.Router();

router.get('/dashboard', getDashboardUsers);
router.post('/dashboard', postUser);
router.put('/dashboard/:userId', editUser);
router.delete('/dashboard/:userId', deleteUser);

module.exports = router;

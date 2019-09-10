const express = require('express');
const router = express.Router();

// @route Get api/contacts
// @desc Get all user contact
// @access Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route Post api/contacts
// @desc Add new contact
// @access Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route PUT api/contacts/:id
// @desc update contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route Delete api/contacts/:id
// @desc delete contact
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Add contact');
});

module.exports = router;

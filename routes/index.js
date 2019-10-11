const router = require('express').Router();
const users = require('./api/users/users');
const content = require('./api/content/content');
const auth = require('./api/auth/auth');
const bids = require('./api/bids/bids');
const transactions = require('./api/transactions/transactions');
const preferred = require('./api/preferred/preferred');

router.use('/auth', auth);
router.use('/users', users);
router.use('/content', content);
router.use('/bids', bids);
router.use('/transactions', transactions);
router.use('/preferred', preferred);

module.exports = router;

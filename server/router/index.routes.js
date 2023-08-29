const router = require('express').Router();

const apiAlbumRouter = require('./api/album.routes');
const apiSingerRouter = require('./api/singer.routes');

router.use('/api/albums', apiAlbumRouter);
router.use('/api/singer', apiSingerRouter);

module.exports = router;

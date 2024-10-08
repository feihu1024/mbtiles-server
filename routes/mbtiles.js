const fs = require('fs');
const Conf = require('conf');
const path = require('path');
const router = require('express').Router();
const MBTiles = require('../mbtiles');
const { mbtilesNotFound } = require('./utils');

// Configurations
const config = new Conf({ projectName: 'MBTiles Server' });
const CACHE = config.get('CACHE');

/**
 * Route MBTiles Metadata
 */
router.route('/:mbtiles').get((req, res) => {
    const service = req.params.mbtiles;
    const filepath = path.join(CACHE, service + '.mbtiles');
    const url = req.url;

    if (!fs.existsSync(filepath)) return mbtilesNotFound(url, service, filepath, res);

    const mbtiles = new MBTiles(filepath);
    return mbtiles.metadata().then((metadata) => {
        return res.json(metadata);
    });
});

module.exports = router;

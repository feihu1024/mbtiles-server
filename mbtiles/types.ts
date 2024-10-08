import * as fs from 'fs';
import * as path from 'path';
import * as MBTiles from './';
import { Tile, Bounds, MBTilesStatic } from './';

interface Container {
    [name: string]: MBTilesStatic;
}

const image = fs.readFileSync(path.join(__dirname, 'test', 'in', 'images', '0', '0', '0.png'));
const bounds: Bounds = [-110, -40, 95, 50];
const options = {
    bounds,
    format: 'jpg',
    type: 'overlay',
    name: 'Foo',
    description: 'Bar',
    minzoom: 1,
    maxzoom: 3
};

// Default (TMS/XYZ Schema)
async function main() {
    const tile: Tile = [0, 0, 0];
    const db = new MBTiles(path.join(__dirname, 'test', 'in', 'plain_1.mbtiles'), 'tms');
    // Class properties
    db.db;
    db.uri;
    // Class methods
    await db.metadata();
    await db.count();
    await db.tables();
    await db.findAll();
    await db.findOne(tile);
    await db.index();
    await db.save(tile, image);
    await db.update(options);
    await db.delete(tile);
    const tiles: Tile[] = await db.findAll();
    const hashes = await db.hashes();
    hashes.size;
    const container: Container = {};
    container['foo'].findOne(tile);

    // Sync functions
    db.metadataSync((error, metadata) => {});
    db.findOneSync(tile, (error, image) => {});
}

// Quadkey Schema
async function quadkey() {
    const tile = '1';
    const db = new MBTiles('foo', 'quadkey');
    await db.findOne(tile);
    await db.save(tile, image);
    await db.update(options);
    await db.delete(tile);
    const tiles: string[] = await db.findAll();
    const hashes = await db.hashes();
    hashes.size;
    const container: Container = {};
    container['foo'].findOne(tile);
}

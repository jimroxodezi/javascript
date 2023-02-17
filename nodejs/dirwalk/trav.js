// const fs = require('fs');
import fs from 'fs';
import path from 'path';

import listFIles from './list.js';

const traverse = (dir) => {

    const subdir = fs.statSync(dir).isDirectory() && fs.readdirSync(dir);

    if (subdir) {
        console.log("traversing......", dir);

        subdir.forEach(_path => {
            // listFIles(_path);
            const fullpath = path.join(dir, _path);
            traverse(fullpath);
        })
    }
}


traverse(process.cwd());
listFIles(process.cwd());
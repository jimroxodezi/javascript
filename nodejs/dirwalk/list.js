import fs from 'fs';


export default function listFIles(dir) {
    fs.readdir(dir, (err, files) => {
        if(err){
            console.log(err);
        }
        files.forEach(file => {
          console.log(file);
        });
      });
}
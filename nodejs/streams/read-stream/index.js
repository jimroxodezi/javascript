const fs = require('fs/promises');

(async() => {

    console.time("readStream");
    const readFileHandler = await fs.open("src.txt", "r");
    const writeFilehandler = await fs.open("dest.txt", "w");

    const readStream = readFileHandler.createReadStream({
        highWaterMark: 64 * 1024
    });

    const writeStream = writeFilehandler.createWriteStream();

    let split = "";

    readStream.on("data", (chunk) => {

        const numbers = chunk.toString("utf-8").split("  ");

        if (parseInt(numbers[0]) !== parseInt(numbers[1]) - 1) {
            if (split) {
                numbers[0] = split.trim() + numbers[0].trim();
            }
        }

        if (parseInt(numbers[numbers.length -2 ]) !== 
            parseInt(numbers[numbers.length - 1])) {
            split = numbers.pop();  
        }

        // console.log(numbers);

        numbers.forEach((number) => {
            let n = parseInt(number);

            if(n % 2 == 0) {
                if (!writeStream.write(" " + n + " ")) {
                    readStream.pause();
                }
            }
        })
    })

    writeStream.on("drain", () => {
        readStream.resume();
    })

    readStream.on("end", () => {
        console.log("Done reading");
        console.timeEnd("readStream");
    })
})();
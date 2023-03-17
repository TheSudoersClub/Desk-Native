const https = require('https');
const fs = require('fs');

const downloadFile = async (filesToDownload) => {
    const downloadPromises = filesToDownload.map(({
        url,
        dest
    }) => {
        return new Promise((resolve, reject) => {
            const fileName = url.substring(url.lastIndexOf('/') + 1);
            const filePath = `${dest}${fileName}`;

            const file = fs.createWriteStream(filePath);

            https.get(url, (res) => {
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`File downloaded to ${filePath}`);
                    resolve();
                });
            }).on('error', (err) => {
                fs.unlink(filePath, () => {
                    console.error(`Error downloading file: ${err.message}`);
                    reject(err);
                });
            });
        });
    });

    await Promise.all(downloadPromises);
};
// export the function
module.exports = downloadFile;
const https = require('https');
const fs = require('fs');
const path = require('path');

// create the app file structure
const generateTemplate = async (rootDir, appName) => {
    const owner = 'TheSudoersClub';
    const repo = 'Desk-Native';
    const branch = 'main';
    const directoryPath = 'src';


    // project directory 
    const downloadDir = path.join(rootDir, appName);

    // create the project directory
    fs.mkdirSync(downloadDir, {
        recursive: true
    });
    if (!fs.existsSync(downloadDir)) {
        fs.mkdirSync(downloadDir);
    }

    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/repos/${owner}/${repo}/contents/${directoryPath}?ref=${branch}`,
        method: 'GET',
        headers: {
            'User-Agent': 'Node.js',
            'Accept': 'application/vnd.github.v3+json'
        }
    };

    try {
        const res = await new Promise((resolve, reject) => {
            https.get(options, (res) => {
                if (res.statusCode < 200 || res.statusCode > 299) {
                    reject(new Error(`Failed to load page, status code: ${res.statusCode}`));
                }
                const chunks = [];
                res.on('data', (chunk) => chunks.push(chunk));
                res.on('end', () => {
                    const body = Buffer.concat(chunks);
                    resolve(body.toString());
                });
            }).on('error', (err) => reject(err));
        });

        const files = JSON.parse(res);
        for (const file of files) {
            if (file.type === 'file') {
                const filePath = path.join(downloadDir, file.name);
                const fileUrl = file.download_url;
                await new Promise((resolve, reject) => {
                    https.get(fileUrl, (res) => {
                        if (res.statusCode < 200 || res.statusCode > 299) {
                            reject(new Error(`Failed to load page, status code: ${res.statusCode}`));
                        }
                        res.pipe(fs.createWriteStream(filePath));
                        res.on('end', () => resolve());
                    }).on('error', (err) => reject(err));
                });
            }
        }
    } catch (error) {
        console.error(error);
    }
};


// export function
module.exports = generateTemplate;
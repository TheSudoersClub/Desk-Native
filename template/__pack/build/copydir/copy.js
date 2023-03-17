const fs = require("fs");
const path = require("path");

// this function copies the directory to the destination 
async function copySrcDir(srcDir, buildDir) {
    try {
        // Get a list of all directories in the build directory
        const dirs = await fs.promises.readdir(buildDir);
        const directories = await Promise.all(
            dirs.map(async (file) => {
                const stat = await fs.promises.stat(path.join(buildDir, file));
                return stat.isDirectory() ? file : null;
            })
        );

        // Copy the contents of the src/client directory to each directory in the build directory
        await Promise.all(
            directories.map(async (dir) => {
                const destDir = path.join(buildDir, dir, 'src', 'client');
                if (!fs.existsSync(destDir)) {
                    await fs.promises.mkdir(destDir, {
                        recursive: true
                    });
                }
                await copyDirRecursive(srcDir, destDir);
            })
        );
    } catch (error) {
        console.error(`Error adding front-end code to the build: ${error}`);
    }
}

async function copyDirRecursive(srcDir, destDir) {
    const entries = await fs.promises.readdir(srcDir, {
        withFileTypes: true
    });

    // Recursively copy all subdirectories and their contents
    await Promise.all(
        entries.map(async (entry) => {
            const srcPath = path.join(srcDir, entry.name);
            const destPath = path.join(destDir, entry.name);
            if (entry.isDirectory()) {
                await fs.promises.mkdir(destPath, {
                    recursive: true
                });
                await copyDirRecursive(srcPath, destPath);
            } else {
                await fs.promises.copyFile(srcPath, destPath);
            }
        })
    );
}

// export the functoin
module.exports = copySrcDir;
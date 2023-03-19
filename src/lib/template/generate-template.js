const fs = require('fs').promises;
const path = require('path');

async function copyDirectory(source, destination) {
  try {
    // Check if the source directory exists
    await fs.access(source, fs.constants.F_OK);

    // Create the destination directory if it doesn't exist
    await fs.mkdir(destination, {
      recursive: true
    });

    // Get a list of all files and directories in the source directory
    const files = await fs.readdir(source);

    // Loop through each file/directory and copy it to the destination
    let destinationPath;
    for (const file of files) {
      const sourcePath = path.join(source, file);
      destinationPath = path.join(destination, file);

      // If the file/directory is a directory, recursively call this function
      if ((await fs.lstat(sourcePath)).isDirectory()) {
        await copyDirectory(sourcePath, destinationPath);
      } else {
        // Check if the filename is "gitignore", and rename it to ".gitignore" in the destination path
        if (file === "gitignore") {
          destinationPath = path.join(destination, ".gitignore");
        }
        await fs.copyFile(sourcePath, destinationPath);
      }
    }
    // log the destination file that are copies
    console.log(destinationPath);
  } catch (error) {
    console.error(error);
  }
}

// export the function 
module.exports = copyDirectory;
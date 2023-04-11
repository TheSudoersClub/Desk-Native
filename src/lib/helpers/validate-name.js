function isValidProjectName(directoryName) {
    // Regex pattern to check if directory name contains any invalid characters
    const regex = /^[a-zA-Z0-9_-]+$/;

    // Check if directory name is not null, undefined or empty
    if (!directoryName) {
        return false;
    }

    // Check if directory name is valid according to the regex pattern
    if (!regex.test(directoryName)) {
        return false;
    }

    // Check if directory name is not equal to any reserved keyword
    const reservedKeywords = ['con', 'prn', 'aux', 'nul', 'com1', 'com2', 'com3', 'com4', 'com5', 'com6', 'com7', 'com8', 'com9', 'lpt1', 'lpt2', 'lpt3', 'lpt4', 'lpt5', 'lpt6', 'lpt7', 'lpt8', 'lpt9'];
    if (reservedKeywords.includes(directoryName.toLowerCase())) {
        return false;
    }

    // Check if directory name is not too long (max length 255 characters)
    if (directoryName.length > 255) {
        return false;
    }

    // If all checks pass, return true
    return true;
}

// exports
module.exports = isValidProjectName;
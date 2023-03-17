// app template paths
const getTemplateFilesPath = (app) => {


    // templates files form github
    const filesToDownload = [
        // __pack paths
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/__pack/main.js',
            dest: app.__pack.root + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/__pack/build/build.js',
            dest: app.__pack.build.root + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/__pack/build/copydir/copy.js',
            dest: app.__pack.build.copydir + '/'
        },

        // src paths
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/src/client/pages/page.html',
            dest: app.src.client.pages + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/src/client/scripts/script.js',
            dest: app.src.client.scripts + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/src/client/styles/style.css',
            dest: app.src.client.styles + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/src/client/index.html',
            dest: app.src.client.root + '/'
        },

        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/src/server/lib/homepage.js',
            dest: app.src.server.lib + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/src/server/routes/homepage.js',
            dest: app.src.server.routes + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/src/server/server.js',
            dest: app.src.server.root + '/'

        },

        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/.gitignore',
            dest: app.root + '/'
        },

    ];

    // return the file url and its destination paths
    return filesToDownload;

};

// export the function
module.exports = getTemplateFilesPath;
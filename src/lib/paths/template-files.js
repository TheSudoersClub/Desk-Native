// app template paths
const getTemplateFilesPath = (app) => {


    // templates files form github
    const filesToDownload = [{
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/client/pages/page.html',
            dest: app.src.client.pages + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/client/scripts/script.js',
            dest: app.src.client.scripts + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/client/styles/style.css',
            dest: app.src.client.styles + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/client/index.html',
            dest: app.src.client.root + '/'
        },

        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/server/lib/homepage.js',
            dest: app.src.server.lib + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/server/routes/homepage.js',
            dest: app.src.server.routes + '/'
        },
        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/server/server.js',
            dest: app.src.server.root + '/'

        },

        {
            url: 'https://raw.githubusercontent.com/TheSudoersClub/Desk-Native/main/template/.gitignore',
            dest: app.src.root + '/'
        },

    ];

    // return the file url and its destination paths
    return filesToDownload;

};

// export the function
module.exports = getTemplateFilesPath;
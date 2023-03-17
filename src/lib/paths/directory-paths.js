const path = require("path");

// app template paths
const getPath = (appName) => {

    // project root path 
    const APP_ROOT_DIR = path.join(process.cwd(), appName);

    const app = {
        root: APP_ROOT_DIR,
        __pack: {
            root: path.join(APP_ROOT_DIR, '__pack'),
            build: {
                root: path.join(APP_ROOT_DIR, '__pack', 'build'),
                copydir: path.join(APP_ROOT_DIR, '__pack', 'build', 'copydir'),
            },
        },
        src: {
            root: path.join(APP_ROOT_DIR, 'src'),
            client: {
                root: path.join(APP_ROOT_DIR, 'src', 'client'),
                pages: path.join(APP_ROOT_DIR, 'src', 'client', 'pages'),
                scripts: path.join(APP_ROOT_DIR, 'src', 'client', 'scripts'),
                styles: path.join(APP_ROOT_DIR, 'src', 'client', 'styles'),
            },

            server: {
                root: path.join(APP_ROOT_DIR, 'src', 'server'),
                lib: path.join(APP_ROOT_DIR, 'src', 'server', 'lib'),
                routes: path.join(APP_ROOT_DIR, 'src', 'server', 'routes'),
            },

        }
    };

    // return the app paths 
    return app;

};

// export the function
module.exports = getPath;
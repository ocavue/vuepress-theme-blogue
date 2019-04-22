const path = require("path")
const sassConfig = {
    includePaths: [
        path.join(__dirname, "..", "..", "node_modules")
    ]
}

module.exports = {
    title: "Blogue Example",
    description: "Just playing around",
    base: "/",
    dest: "dist",
    serviceWorker: false,
    theme: "blogue",
    themeConfig: {
        debug: false,
    },
    scss: sassConfig,
    sass: sassConfig,
}

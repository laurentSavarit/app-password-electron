const {
    app,
    BrowserWindow
} = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadFile("index.html")
}

app.on("window-all-closed", () => process.platform !== "darwin" && app.quit())

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => BrowserWindow.getAllWindows().length === 0 && createWindow());
});
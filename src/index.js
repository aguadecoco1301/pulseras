//Todo este código ha sido generado por https://chat.openai.com
//De igual forma, eres libre de usarlo.

const {app, BrowserWindow, Menu} = require("electron")

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.maximize()
    win.loadFile("page/index.html")

}
app.once("ready", () => {
    Menu.setApplicationMenu(null);
});

app.whenReady().then(createWindow)
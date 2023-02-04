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
    win.loadFile("../page/index.html")

}
app.once("ready", () => {
    Menu.setApplicationMenu(null);
    win.maximize()
});

app.whenReady().then(createWindow)
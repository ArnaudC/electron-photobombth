const electron = require('electron')

const {app, BrowserWindow} = electron

let mainWindow
app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        height: 725,
        width: 1200,
        resizable: false
    })

    mainWindow.loadURL(`file://${__dirname}/capture.html`)

    mainWindow.webContents.openDevTools()

    mainWindow.on('close', _ => {
        mainWindow = null
    })
})
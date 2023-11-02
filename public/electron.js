const path = require('path')
const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 1000,
    title: "Musicfy",
    // titleBarStyle: "hiddenInset",
    // resizable: false,
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:5173/"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
const {app , BrowserWindow} = require ("electron");

const createwindow = () => {
    const win = new BrowserWindow({
        width : 800,
        height : 600
    });

    win.loadFile("index.html");
}

app.whenReady().then( () => {
    createwindow();
}) ;

app.on("window-all-closed", ()=> {
    if (process.platform != "darwin") app.quit();
});




console.log("Hello from Electron ");
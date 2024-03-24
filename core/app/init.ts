const { app, BrowserWindow } = require('electron');

const isDev = !app.isPackaged;

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

	if(isDev){
		win.loadURL('http://localhost:40992/');
	}else{
		win.loadFile(__dirname + './src/index.html');
	}
}

app.on('ready', createWindow);
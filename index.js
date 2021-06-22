const electron = require('electron')
const { app, BrowserWindow, session } = electron
app.on('ready', () => {
	const mainWindow = new BrowserWindow({})
	//mainWindow.loadURL(`file://${__dirname}/index.html`)
	mainWindow.loadURL('https://lincolnnguyen18.com/weespeak')
	//mainWindow.loadURL('https://meet.google.com/pwu-hzgu-ocd')
	//mainWindow.loadURL('https://www.google.com/intl/en/chrome/demos/speech.html')
	//mainWindow.loadFile("index.html")
	//systemPreferences.askForMediaAccess('microphone')
	console.log(session.defaultSession)
	session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
		if (permission === 'media') {
			return callback(true)
		}
	})
	session.defaultSession.setPermissionCheckHandler((webContents, permission, requestingOrigin) => {
		if (permission === 'media') {
			console.log('callback called!')
			return true
		}
	})
})

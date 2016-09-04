'use strict';
const electron = require('electron');
const GhReleases = require('electron-gh-releases')

let options = {
	repo: 'akameco/electron-playground',
	currentVersion: app.getVersion()
};

const updater = new GhReleases(options);

updater.check((err, status) => {
	if (!err && status) {
		updater.download();
	}
});

updater.on('update-downloaded', info => {
	updater.install();
})

electron.app.on('ready', () => {
	const win = new electron.BrowserWindow({width: 400, height: 400});
	win.loadURL('http://qiita.com/');
});

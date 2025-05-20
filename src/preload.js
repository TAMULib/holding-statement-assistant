const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Example of sending a message to the main process
  sendToMain: (message) => ipcRenderer.send('message-from-renderer', message),

  // You can expose more APIs here as needed
  // For example, to receive messages from the main process:
  // receiveFromMain: (callback) => ipcRenderer.on('message-to-renderer', (event, ...args) => callback(...args))
});

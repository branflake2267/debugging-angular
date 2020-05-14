# Debugging Angular
Debugging Angular with Visual Studio Code.

[![Debugging Video Tutorial](https://img.youtube.com/vi/H-sMmxfNxBM/0.jpg)](https://www.youtube.com/watch?v=H-sMmxfNxBM)

## Project Configuration
| Setting | Value |
| --- | --- |
| Purpose | Debugging with VS Code using a simple Angular project |
| Client Framework | Angular |
| Client Language | TypeScript |
| Architecture | npm/node |
| IDE | Visual Studio Code |
| License | GPL v3 |
| Tutorial | [Youtube Tutorial](https://www.youtube.com/watch?v=H-sMmxfNxBM) |



## Generate Application
The app generation is based on https://angular.io/guide/setup-local.

* Run `npm install -g @angular/cli` - Install the app generator CLI tool.
* Run `ng new client` - Generate an application, I named it `client`.
* Run `cd client` - Change directory to the app.
* Run `ng serve --open` - Start the compiler, web server and open Chrome. 


## Debugging

### Debug with Visual Studio Code

#### Configure Launchers

1. [launch.json](./.vscode/launch.json)
2. [tasks.json](./.vscode/tasks.json)

### Run Launchers
Launching and debugging in chrome will allow you to use break points in the source code. 
The launchers are based on https://github.com/microsoft/vscode-recipes/tree/master/Angular-CLI.

* Run the Visual Studio Code Launcher `Launch ng serve & Chrome`


### Debug with npm

* Run `npm start`


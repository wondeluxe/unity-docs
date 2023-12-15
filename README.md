# **Unity Package Documentation**

Documentation for the following Unity package:
- [Wondeluxe](https://github.com/wondeluxe/unity-wondeluxe)
- [Wondeluxe Build](https://github.com/wondeluxe/unity-build)
- [Wondeluxe Android](https://github.com/wondeluxe/unity-android)
- [Wondeluxe iOS](https://github.com/wondeluxe/unity-ios)
- [Wondeluxe Tweening](https://github.com/wondeluxe/unity-tweening)

### **Project summary**

The repo is a Node module and depends on a global installation of [Doxsite](https://github.com/wondeluxe/doxsite) and [Doxygen](https://www.doxygen.nl/index.html).

Configuration values for each package are supplied in **node_scripts > config.js**. config.js in turn requires an untracked file: **node_scripts > sourcepaths.js**. sourcepaths.js must export an object with paths to the packages source code with the following structure:

```js
export default {
	package: [
		'/Path/To/Unity Package/Runtime',
		'/Path/To/Unity Package/Editor'
	]
}
```
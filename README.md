# Vault

## What is vault?

Vault makes it easy to provide some hidden functionality to users. For example having a konami code on the page which triggers a feature, such as a raptor appearing on the screen or a game of tetris appearing. How vault differs from the usual konami codes is that the user must type a passphrase which unlocks these codes. You can then register commands to particular strings. Its easier to see in an example below.


#### Setting the passphrase

This sets the code that will unlock all the other commands

```javascript
$.vault.passphrase('rawr');
```

#### Registering callbacks

These are callbacks that are triggered when a word is typed

```javascript
$.vault.register('alert', function() {
	alert('You have triggered the command');
});
```

So if the user types **rawr** the vault is now unlocked, so if they then type **alert** the callback will be triggered which alerts a message.

### Uses

This small plugin was designed for fun to allow you to hide features in your page. You should note that obviously it is not secure as the passphrase and code is in plaintext in the javascript files. It could however be used to bring up a little admin console and trigger commands such as new/edit/delete. Appropriate admin checks should still be implemented. 

### How to make changes

 - Edit code in the /src folder
 - To minify, open terminal and type **make**
 - Minified file in /dist folder

This makefile uses the google closure compiler provided to minify the source file and saves it in the dist folder.

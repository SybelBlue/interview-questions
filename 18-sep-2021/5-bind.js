// A thief tries to steal Essuns
// secret identity.
//
// Prompt 1:
//    What happens when this code runs?
// Prompt 2:
//    How do we fix the thief's code?

// 60 sec to read
// 30 sec to respond to prompt 1
// 30 sec to respond to prompt 2


const hero = {
    _name: 'Essun',
    getSecretIdentity: function() {
        return this._name; // what is 'this' bound to!?
    }
};

// old code unbinds 'this', should be 'hero'!
// var stealSecretIdentity = hero.getSecretIdentity; 
// fix - manually force a binding:
var stealSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log('stolen:  ', stealSecretIdentity()); 
// at first
// -> undefined
// now
// -> Essun

console.log('original:', hero.getSecretIdentity());
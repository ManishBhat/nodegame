var GameState = require('../client/nodeGame/GameState.js');
module.exports = GameState;
var GameState = GameState.GameState;

var GameStorage = require('../client/nodeGame/GameStorage.js').GameStorage;

var gs = new GameStorage();

var clients = ['a','b'];//['a','b','c','d'];
var states = [1,2]; //[1,2,3,4];
var ids = ['z','x'];//['z','x','c','v'];

for (var i=0;i<clients.length;i++) {
	for (var j=0;j<states.length;j++) {
		for (var x=0;x<ids.length;x++) {
			gs.add(clients[i], ids[x], Math.random(0,1), new GameState({state:states[j]}));
		}
	}
}

//console.log(gs.toString());

//console.log('Default sort (by Player)');
//gs.sort();
//console.log(gs.toString());
////console.log(gs);
//
//console.log('Reverse');
//gs.reverse();
//console.log(gs.toString());
//
//console.log('Sort by Player');
//gs.sort();
//console.log(gs.toString());
////console.log(gs);
//
//console.log('Sort by State');
//gs.sortByState();
//console.log(gs.toString());
//
//console.log('Sort by Key');
//gs.sortByKey();
//console.log(gs.toString());

//console.log('Get by Player');
//var g = gs.getByPlayer('b');
//console.log(g);

//console.log('Get by State');
//var g = gs.getByState(new GameState({state:2}));
//console.log(g);

//console.log('Get by Key');
//var g = gs.getByKey('z');
//console.log(g);

//console.log('Get Values');
//var v = gs.getValues();
//console.log(v);
//
//console.log('Get Values (reversed)');
//gs.reverse();
//var v = gs.getValues();
//console.log(v);
//
//console.log('Get Value of Player \'a\'');
//var v = gs.getValues({player: 'a'});
//console.log(v);

//console.log('Get Key-Values');
//var v = gs.getKeyValues();
//console.log(v);


var gs = new GameStorage();

var clients = ['a','b'];//['a','b','c','d'];
var states = [1,2]; //[1,2,3,4];
var ids = ['z','x'];//['z','x','c','v'];
var objs = [{mario: 'yes', paolo: 'no'}]
for (var i=0;i<clients.length;i++) {
	for (var j=0;j<states.length;j++) {
		for (var x=0;x<ids.length;x++) {
			for (var o=0;o<objs.length; o++) {
				gs.add(clients[i], ids[x], objs[o], new GameState({state:states[j]}));
			}
		}
	}
}

//console.log(gs.toString());

//console.log('Default sort (by Player)');
//gs.sort();
//console.log(gs.toString());
////console.log(gs);
//
//console.log('Reverse');
//gs.reverse();
//console.log(gs.toString());

//console.log('Sort by Player');
//gs.sort();
//console.log(gs.toString());
////console.log(gs);
//
//console.log('Sort by State');
//gs.sortByState();
//console.log(gs.toString());
//
//console.log('Sort by Key');
//gs.sortByKey();
//console.log(gs.toString());

//console.log('Get by Player');
//var g = gs.getByPlayer('b');
//console.log(g);
//
//console.log('Get by State');
//var g = gs.getByState(new GameState({state:2}));
//console.log(g);
//
//console.log('Get by Key');
//var g = gs.getByKey('z');
//console.log(g);

//console.log('Get Values');
//var v = gs.getValues();
//console.log(v);

//console.log('Get Values (reversed)');
//gs.reverse();
//var v = gs.getValues();
//console.log(v);
//
//console.log('Get Value of Player \'a\'');
//var v = gs.getValues({player: 'a'});
//console.log(v);

//console.log('Get Key-Values');
//var v = gs.getKeyValues();
//console.log(v);


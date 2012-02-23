nodeGame Documentation
======================
Stefano Balietti <sbalietti@ethz.ch>
v0.4.5, Aug 2011

// Web page meta data.  
:keywords:    nodeGame,node.js,websockets,HTML5,experiments,games,javascript
:description: nodeGame is a free, open source javascript library implementing communication for game-like applications in browser.

.{revdate}: nodeGame {revnumber} Released
************************************************************************
**+nodeGame+** is under active development and so is this user guide. Please always refer to the latest version of nodeGame.

'Stefano Balietti'
************************************************************************

Introduction
------------

+*nodeGame*+ is a free, open source, event-driven javascript framework for multiplayer online games in a browser environment.

Features
~~~~~~~~~
- Synchronous and Asynchronous games 
- Keep track of the state of the players
- Start/Pause/Resume games
- Reliable Messaging
- Anti flood protection (to do)
- SSL connection (to check)
- Statistics 
- Output Formatting
- Mailing
- Easy to customize. See <<section-example,example>> 
- much more... 


Technology
----------

**+nodeGame+** is 100% javascript code. It is built upon
  http://nodejs.org[node.js] and http://socket.io[socket.io].

Targeted audience
-----------------

**+nodeGame+** is designed to be as user-friendly as possible, but not more. This means that with little programming skills is already possible to create complex multiplayer games. On the other hand, minimal programming skills are indeed required. This obviously entails also some knowledge of javascript, the programming language of the browser. For starting guides about javascript you can look into:

- link:http://www.w3schools.com/js/[A beginner tutorial]
- link:http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742[An advanced (not free) book]

If you are familiar enough with javascript you can proceeds to the next section, showing how to setup a nodeGame server, and clients, and how to write games for nodeGame.

[[section-example]]
Examples
--------

How to run the server
~~~~~~~~~~~~~~~~~~~~~

You need to have http://nodejs.org[node.js] installed in your system.

Get the latest server module from https://github.com/shakty/nodeGame/[github].

Copy the server directory in a folder of your choice.

Create a launcher file in the same directory, or use the predefined one **+server.js+**.

A minimal launcher configuration file would look like <<server-launcher-example, the launcher in the example>>

[[server-launcher-example]] 
.nodeServer launcher file
---------------------------
var ServerNode = require('./nodegame-server');

var options = { 
		name: "nodeGame Server",
		port: 8004
};

var sn = new ServerNode(options);

sn.addChannel({
		name: 'example',
	  	player: '/gameexample'
		admin: '/gameexample/admin',
});
---------------------------

The above snippet of code can be easily explained:

- the **+require+** directive import the nodegame-server module;
- a **+ServerNode+** object with a given name is created listening on port 8004  
- a _channel_ is added to the server; a channel is just specific address which can be bound to a specific game.

Save the above file as +*server.js*+, and run the server with command: 

-----
node server.js
-----

If you want to make sure that your server stays always up you can read this great tutorial:

- http://blog.nodejitsu.com/keep-a-nodejs-server-up-with-forever

How to write a client
~~~~~~~~~~~~~~~~~~~~~

The server architecture is very flexible, and a client can be written mostly in any programming language able to implement web sockets. However, the +*nodeGame*+ client library is for now available in javascript only, therefore the only two enviroment where it can be run are the browser, and Node.js. Herein, two examples follows.

.nodeGame client in a browser
----------------------------
<!doctype html>
<title>nodeClient Example</title>
<body>
<script src="http://localhost:8004/socket.io/socket.io.js"></script> 
<script src="http://localhost:8004/nodegame.js" charset="utf-8"></script>
<script src="GameExample.js" charset="utf-8"></script>

<script>
  window.onload = function(){
    var conf = {
      name: 'Player_1',
      url: 'http://localhost:8004/gameexample'
    };
    node.play(conf, new GameExample());
  }
</script>
</body>
----------------------------


.nodeGame client in Node.js
----------------------------
var GameExample = require(gameexample');
var nodegame = require('nodegame-client');

var conf = {
  name: 'Player_1',
  url: 'http://localhost:8004/gameexample'
};
nodegame.play(conf, new GameExample());
----------------------------

As you could see, both files are rather similar, and the main difference concerns how to import the nodeGame library. Notice that the actual game to play must be instantiated and passed as a parameter to the **+play+** method.


How to write a game
~~~~~~~~~~~~~~~~~~~

A game consist in a set of states, steps and rounds. For each step it is possible to define different screens, and rules to apply to the user actions. 

.Game Example
[width="40%"]
|=======
|State A (Instructions) | Step 1		| x1 round
|State B (Game)		| Step 1, Step2, Step3	| x 10 rounds
|State C (Debrief)	| Step 1  	 	| x 1 round
|=======

Game Messages
^^^^^^^^^^^^^

Games are played exchanging messages between players. All messages pass through the server, which routes them to the correct receiver. Whenever a message is received an event is raised informing that such a event has just event. Writing a game reduces to emitting and catching the events you are interested in.

.What are events?
NOTE: An event is literally something that has happened. It can really be anything, e.g. the user moving the mouse over a given area of the screen, or clicking a button. Javascript is shipped already with an exhaustive list of event handlers, +*nodeGame*+ adds some extra ones more targeted for a gaming environment. 


.How to emit and catch events?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

After importing the **+nodeGame-client+** library, the **+node+** object is available in your programming environment. 

[width="90%"]
|=======
|node.on('EVENT_A', function)	| Execute function whenever 'EVENT' happens
|node.emit('EVENT_B', param1, param2, param3) 	| Emit an event of
type 'EVENT_B' locally  
|node.fire('EVENT_B', param1, param2, param3)	| Same as emit, but deprecated
|=======

It is important to understand that the +*emit*+ method 


Each message belongs to a certain category, which can specified by the users. Some categories are already prepared and have special meaning.

[width="90%"]
|=======
|HI	| Establish the connection between server and clients
|STATE 	| Communicate or set the state of the game 
|PLIST 	| Communicate or set the list of players 
|DATA	| Pass over some data 
|TXT	| Pass over a text message
|BYE	| Terminate the connection between server and client (TO BE DONE)
|=======

All the message, with the sole exceptions of HI and BYE messages, also have the following properties:

[width="90%"]
|=======
|Direction	| Outgoing or Incoming
|Target 	| Set / Get / Say 
|=======











TODO
----

There is still a long list of things which are planned for future development.

1. Distribute nodeGame as a standard package on npm
2. Create a custom nodeGame package manager for games and widgets only (ngpm)
3. Games can directly passed as an object in the server
4. Implementing a vast amount of games from the literature.
5. Facilitating the exporting of results
6. Storing the state of the game locally to resume upon reconnection.

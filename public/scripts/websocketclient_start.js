window.onload = function () {
	var socket = io();    

setTimeout(function() {document.getElementById("test").style.display = "none";}, 5000);

document.getElementById("graj").addEventListener("click", assignPlayers);

	function assignPlayers() {
		 socket.emit('setPlayer', '');
	};
		socket.on('setPlayer', function (playerID) {
		var msg = JSON.parse(playerID);	
			console.log("Odpowiedź z serwer: playerID : " + msg);		  
			if (msg == 1) {
				window.open("graczA", "_self");			
			} else if (msg == 2) {
				 window.open("graczB", "_self");
			}			
	});
}; 
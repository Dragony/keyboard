var keywords = {
    Enter: function(){

    },
    hello: function(){
        swal(
            'Hello!',
            'You found the Hello keyword!',
            'success'
        );
    },
    party: function(){
        var partyInterval = setInterval(function(){
            document.body.style.backgroundColor = getRandomColor();
        }, 200);
        setTimeout(function(){
            clearInterval(partyInterval);
            document.body.style.backgroundColor = 'white';
        }, 5000);
    },
    email: function () {
        conf("Do you want to send me an email?!").then((result) => {
            if (result.value) {
                window.location.href = "mailto:" + ("magnisio".replace(/([anisuo]+)/g, "")) + "@wasd.ch";
            }
        });
    },
    teamspeak: function(){
        conf("Do you want to join the teamspeak server?!").then((result) => {
            if (result.value) {
                window.location.href = "ts3server://wasd.ch";
            }
        });
    },
    poweruser: function(){
        conf("Go to Teamspeak Poweruser page?").then((result) => {
            if (result.value) {
                window.open("/poweruser", "_blank");
            }
        });
    },
    playback: function(){
        typeLetters("playback " + ("playback").split("").reverse().join(""));
    },
    pink: function(){
        document.getElementById('border').style.fill = 'pink';
    },
    black: function(){
        document.getElementById('border').style.fill = 'black';
    },
    white: function(){
        document.getElementById('border').style.fill = 'white';
    },
    ArrowUpArrowDown: function(){
        document.body.classList.add('rotate');
        setTimeout(function(){
            document.body.classList.remove('rotate');
        }, 5000);
    },
    alarm: function(){
        var paths = document.getElementsByTagName('path');
        for(var i in paths){
            var path = paths[i];
            if(!path.style){
                continue;
            }
            path.style.fill = 'red';
            setTimeout(function(path){ path.style.fill = 'white' }.bind(this, path), 500);
            setTimeout(function(path){ path.style.fill = 'red' }.bind(this, path), 1000);
            setTimeout(function(path){ path.style.fill = 'white' }.bind(this, path), 1500);
            setTimeout(function(path){ path.style.fill = 'red' }.bind(this, path), 2000);
            setTimeout(function(path){ path.style.fill = 'white' }.bind(this, path), 2500);
        }
    },
    "wasd.ch": function(){
        document.getElementById('key_w').style.fill = 'blue';
        document.getElementById('key_a').style.fill = 'blue';
        document.getElementById('key_s').style.fill = 'blue';
        document.getElementById('key_d').style.fill = 'blue';

        setTimeout(function(){
            document.getElementById('key_w').style.fill = 'white';
            document.getElementById('key_a').style.fill = 'white';
            document.getElementById('key_s').style.fill = 'white';
            document.getElementById('key_d').style.fill = 'white';
        }, 3000);
    }
};
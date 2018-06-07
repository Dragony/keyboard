var keywords = {
    Enter: function(){
        swal(
            'Howto',
            'You don not need to press enter, commands will be accepted right away (if they are valid)',
            'success'
        );
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
        }, 2000);
    },
    music: function(){
        var volume = 0.3;
        music.volume = volume;
        music.play();
        setTimeout(function(){
            var fadeOut = setInterval(function(){
                var interval = 0.01;
                volume -= interval;
                if(volume < 0){
                    music.pause();
                    clearInterval(fadeOut);
                    return;
                }
                music.volume = volume;
            }, 100);
        }, 10000);
    },
    snow: function(){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        snowStorm.toggleSnow();
        setTimeout(function(){
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            snowStorm.toggleSnow();
        }, 5000);
    },
    wat: function(){
        wat_img.classList.add("show");
        setTimeout(function(){
            wat_img.classList.remove("show");
        }, 2500)
    },
    earthquake: function(){
        var initialTransition = document.body.style.transition;
        document.body.style.transition = '0.05s';
        var quakeInterval = setInterval(function(){
            document.body.style.marginLeft = (Math.random() * 100) / 2 - 25;
            document.body.style.marginTop = (Math.random() * 100) / 2 - 25;
        }, 100);
        setTimeout(function(){
            clearInterval(quakeInterval);
            document.body.style.transition = initialTransition;
            document.body.style.marginLeft = 0;
            document.body.style.marginTop = 0;
        }, 5000);
    },
    birthday: function(){
        typeLetters("471989");
    },
    source: function(){
        conf("Looking at the source might spoil the fun. Continue?", 'warning').then((result) => {
            if (result.value) {
                window.open("https://github.com/Dragony/keyboard", "_blank");
            }
        });
    },
    lucern: function(){
        window.open('https://photos.app.goo.gl/TikGTOqo67uC5L0s2', '_blank');
    }
};
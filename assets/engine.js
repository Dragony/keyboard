var acceptInput = true;
var knownKeywords = ['hello', 'teamspeak', 'email'];
var allKeywords = [];

for(var i in keywords){
    allKeywords.push(i);
}
shuffle_array(allKeywords);
var totalKeywords = allKeywords.length;
document.addEventListener("keydown", function(click){
    var keyEl = getKey(click);
    if(keyEl){
        keyEl.style.fill = getRandomColor();
        updateScreen(click.key);
        click.preventDefault();
    }else{
        console.log('unknown key', click.code, click.key, click);
    }
});
document.addEventListener("keyup", function(click){
    var keyEl = getKey(click);
    if(keyEl){
        keyEl.style.fill = 'white';
    }
});
function flashKey(key){
    if(key === '.'){
        flashCode('Period');
        return;
    }
    flashButton({key: key, code: ""});
}
function flashCode(code){
    flashButton({key: "", code: code});
}
function flashButton(params){
    var keyEl = getKey(params);
    if(keyEl) {
        keyEl.style.fill = getRandomColor();
        setTimeout(function(){
            keyEl.style.fill = 'white';
        }, 200);
    }
}
function typeLetters(string){
    if(string === 'Enter'){
        flashCode(string);
        return;
    }
    if(string === 'ArrowUpArrowDown'){
        flashCode('ArrowUp');
        setTimeout(flashCode.bind(this, 'ArrowDown'), 200);
        return
    }
    var typeSpeed = 300;
    var letters = string.split("");
    letters.forEach(function(letter, key){
        setTimeout(flashKey.bind(this, letter), key * typeSpeed);
    })
}
function getKey(event){
    var key = event.key;
    var keyEl = document.getElementById('key_' + key);
    if(keyEl){
        return keyEl;
    }
    keyEl = document.getElementById('key_' + event.code.toLowerCase());
    return keyEl;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getScreen(){
    return document.getElementById('screen-text');
}
function updateScreen(char){
    if(!acceptInput){
        return false;
    }
    if(char === 'Backspace'){
        getScreen().value = getScreen().value.slice(0, -1);
    }else{
        if(getScreen().value.length > 20){
            getScreen().value = getScreen().value.substr(getScreen().value.length - 20);
        }
        getScreen().value = getScreen().value + char;
    }
    triggerKeywords(getScreen().value);
}
function conf(text, type){
    type = type || 'success';
    return swal({
        title: 'Are you sure?',
        text: text,
        type: type,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#ccc',
        confirmButtonText: 'Yes!'
    })
}
function triggerKeywords(string){
    for(var keyword in keywords){
        if(keywords.hasOwnProperty(keyword)){
            if(~string.indexOf(keyword)){
                if(!~knownKeywords.indexOf(keyword)){
                    knownKeywords.push(keyword);
                    document.getElementById('current').innerHTML = knownKeywords.length;
                    document.getElementById('knownKeywords').innerHTML += '<li>' + keyword + '</li>';
                }
                acceptInput = false;
                getScreen().classList.add('loading');
                setTimeout(function(keyword){
                    keywords[keyword]();
                    acceptInput = true;
                    getScreen().classList.remove('loading');
                    getScreen().value = '';
                }.bind(this, keyword), 1000);
            }
        }
    }
}
function tip(){
    for(var i in allKeywords){
        if(!~knownKeywords.indexOf(allKeywords[i])){
            typeLetters(allKeywords[i]);
            break;
        }
    }
}
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle_array(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
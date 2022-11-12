const rawList = `
    https://api.mod.io/v1/games/3809/mods/2403967/files/3124652/download
https://api.mod.io/v1/games/3809/mods/2405201/files/3124548/download
https://api.mod.io/v1/games/3809/mods/2389795/files/3082639/download
https://api.mod.io/v1/games/3809/mods/2448569/files/3082065/download
https://api.mod.io/v1/games/3809/mods/2480834/files/3124639/download
https://api.mod.io/v1/games/3809/mods/2421141/files/3118259/download
https://api.mod.io/v1/games/3809/mods/2442219/files/3073859/download
https://api.mod.io/v1/games/3809/mods/2401436/files/3042180/download
https://api.mod.io/v1/games/3809/mods/2424211/files/3050390/download
https://api.mod.io/v1/games/3809/mods/2448064/files/3081630/download
https://api.mod.io/v1/games/3809/mods/2413978/files/3120060/download
https://api.mod.io/v1/games/3809/mods/2469336/files/3122352/download
https://api.mod.io/v1/games/3809/mods/2406223/files/3018592/download
`;



window.onload = function (){
    const linkList = rawList.trim().split("\n");
    var i = 0
    for(const link of linkList){
        i ++;
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.name = "cb" + i;
        cb.id = "cb" + i;

        const label = document.createElement("label");
        label.setAttribute("for", cb.id);
        label.innerHTML = '<br><a href="'+ link + '">Link ' + i + '</a>';
        label.appendChild(cb);

        document.body.appendChild(label);

        label.onclick = checktheboxpls;
    }
};

function checktheboxpls (e) {
    e.currentTarget.lastChild.checked = true;
    console.log(e);
}

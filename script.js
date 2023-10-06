const rawList = `
    https://api.mod.io/v1/games/3809/mods/2755536/files/3897713/download
    https://api.mod.io/v1/games/3809/mods/2380732/files/4068505/download
    https://api.mod.io/v1/games/3809/mods/2651428/files/3512241/download
    https://api.mod.io/v1/games/3809/mods/3289780/files/4378332/download
    https://api.mod.io/v1/games/3809/mods/2384763/files/3565565/download
    https://api.mod.io/v1/games/3809/mods/3032309/files/3918259/download
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

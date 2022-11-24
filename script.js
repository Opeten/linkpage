const rawList = `
    https://api.mod.io/v1/games/3809/mods/2403967/files/3187205/download
https://api.mod.io/v1/games/3809/mods/2509521/files/3177638/download
https://api.mod.io/v1/games/3809/mods/2431698/files/3180656/download
https://api.mod.io/v1/games/3809/mods/2525996/files/3187479/download
https://api.mod.io/v1/games/3809/mods/2497890/files/3150326/download
https://api.mod.io/v1/games/3809/mods/2381624/files/2984150/download
https://api.mod.io/v1/games/3809/mods/2518298/files/3183889/download
https://api.mod.io/v1/games/3809/mods/2526404/files/3188004/download
https://api.mod.io/v1/games/3809/mods/2387370/files/2992428/download
https://api.mod.io/v1/games/3809/mods/2415856/files/3180635/download
https://api.mod.io/v1/games/3809/mods/2434504/files/3065332/download
https://api.mod.io/v1/games/3809/mods/2426821/files/3171641/download
https://api.mod.io/v1/games/3809/mods/2417568/files/3171649/download
https://api.mod.io/v1/games/3809/mods/2418664/files/3042676/download
https://api.mod.io/v1/games/3809/mods/2525996/files/3187479/download
https://api.mod.io/v1/games/3809/mods/2417321/files/3038566/download
https://api.mod.io/v1/games/3809/mods/2469137/files/3121634/download
https://api.mod.io/v1/games/3809/mods/2414338/files/3031905/download
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

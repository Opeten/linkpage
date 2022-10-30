const rawList = `
    https://api.mod.io/mods/file/3018592
https://api.mod.io/mods/file/3036257
https://api.mod.io/mods/file/3036687
https://api.mod.io/mods/file/3036581
https://api.mod.io/mods/file/3035086
https://api.mod.io/mods/file/2994287
https://api.mod.io/mods/file/3027764
https://api.mod.io/mods/file/3024746
https://api.mod.io/mods/file/2978738
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
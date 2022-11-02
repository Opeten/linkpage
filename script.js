const rawList = `
    https://api.mod.io/mods/file/3064953
    https://api.mod.io/mods/file/3060884
    https://api.mod.io/mods/file/3033580
    https://api.mod.io/mods/file/3010886
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

function loadHtml(html) {
    var con = document.createElement('div');
    var xhr = new XMLHttpRequest();
    document.body.appendChild(con);
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            con.innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', html, true);
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send();
}

function checkAnchor() {
    let anchor = document.URL.split('#').length > 1 ? document.URL.split('#')[1] : null;
    if (anchor == null) return;
    switch (anchor) {
        case 'ajokuva':
            console.log(`Redirected user from ${anchor} to vehicle photoshoot section.`);
            break;
        case 'atk':
            console.log(`Redirected user from ${anchor} to technological device assistance section.`);
            break;
        case 'dronekuvaus':
            console.log(`Redirected user from ${anchor} to drone photoshoot section.`);
            break;
        case 'kotisivut':
            console.log(`Redirected user from ${anchor} to personalized homepage section.`);
            break;
        case 'ylioppilaat':
            console.log(`Redirected user from ${anchor} to upper-secondary graduate photoshoot section.`);
            break;
    }
}
checkAnchor()
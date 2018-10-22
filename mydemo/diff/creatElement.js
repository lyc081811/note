function creatElement(vnode) {
    var tag = vnode.tag;
    var attrs = vnode.attrs || {};
    var children = vnode.children || [];
    if (!tag) {
        return null;
    }

    var ele = document.createElement(tag);
    var attrsName;
    for(attrsName in attrs) {
        if(attrs.hasOwnProperty(attrsName)) {
            ele.setAttribute(attrsName, attrs[attrName])
        }
    }
    children.forEach(x => {
        ele.appendChild(creatElement(x))
    })
    return ele;
}
 function updateChildren(vnode, newVnode) {
     var children = vnode.children || [];
     var newChildren = newVnode.children || [];
    children.forEach((x, i) => {
        var newChildrenVnode = newChildren[i];
        if (x.tag == newChildrenVnode.tag) {
            //  深层次的对比，递归
            updateChildren(x, newChildrenVnode);
        } else {
            replaceNode(x, newChildrenVnode);
        }
    });
 }
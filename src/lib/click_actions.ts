
export const clickOut = (node: Node, fn: (e: Event) => void) => {
    const c = (event: Event) => {
        if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
            fn(event);
        }
    }
    //document.addEventListener('click', c);
    document.addEventListener('mousedown', c);
    return {
        destroy() {
            document.removeEventListener('mousedown', c);
        }
    }
}
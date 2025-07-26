interface InvisibleProps {
    show: boolean;
    //transition?: ('fadeIn' | 'slideInLeft' | 'slideInRight')[];
    slide?: 'Left' | 'Right';
    noTransitions: boolean;
}
export default function makevisible(node: HTMLElement, params: InvisibleProps) {
    let { slide, noTransitions } = params;

    if (noTransitions) {
        node.classList.remove('opacity-0', 'invisible');
        node.classList.add('opacity-100', 'visible');
        return;
    }

    node.classList.add('opacity-0');
    
    return {
        update: (newParams: InvisibleProps) => {
            if (newParams.show) {
                node.classList.remove('opacity-0', 'invisible');
                node.classList.add('opacity-100', 'visible');
                if (slide) {
                    node.classList.add(`animate-slideIn${slide}`)
                } else {
                    node.classList.add('animate-fadeIn');
                }
            }
        }
    }
}
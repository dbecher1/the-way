
export interface IntersectionProps {
    cb: () => void;
}
export default function intersection(node: HTMLElement, props: IntersectionProps) {
    const {
        cb
    } = props;
    const observer = new IntersectionObserver(e => {
        e.forEach(entry => {
            if (entry.isIntersecting) {
                cb();
            }
        })
    }, {
        threshold: 1.0,
    })
    observer.observe(node);
    return {
        destroy: () => {
            observer.unobserve(node);
            observer.disconnect();
        }
    }
}
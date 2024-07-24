import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const LazyLoadComponent = ({ onIntersect, children }) => {
    const ref = useRef();

    useEffect(() => {
        const currentRef = ref.current;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onIntersect();
                }
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [onIntersect]);

    return <div ref={ref}>{children}</div>;
};

LazyLoadComponent.propTypes = {
    onIntersect: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default LazyLoadComponent;

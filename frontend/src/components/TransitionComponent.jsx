import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TransitionComponent.css';

const TransitionComponent = ({ children }) => {
    const location = useLocation();

    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key} // Ensure transition occurs on location change
                classNames="fade"
                timeout={300} // Duration of the animation
            >
                <div className="transition-container">
                    {children}
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

TransitionComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TransitionComponent;

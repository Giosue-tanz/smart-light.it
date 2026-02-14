import React from 'react';
import './SmartLightFooter.css';

const SmartLightFooter = () => {
    return (
        <footer className="sl-footer">
            <div className="sl-footer-inner">
                <div className="sl-footer-left">© {new Date().getFullYear()} Smart Light</div>
                <div className="sl-footer-right">Made with ❤️ for urban mobility</div>
            </div>
        </footer>
    );
};

export default SmartLightFooter;

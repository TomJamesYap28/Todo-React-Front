import { useEffect } from 'react';

const Sidebarhooks = () => {
    useEffect(() => {
        const sidebarbody = document.querySelector('.sidebarbody');
        const sidebar = document.querySelector('.sidebar');
        const modeSwitch = document.querySelector(".toggle-switch");
        const modeText = document.querySelector(".mode-text") as HTMLElement;

        const handleMouseEnter = () => {
            sidebar?.classList.remove('close');
        };

        const handleMouseLeave = () => {
            sidebar?.classList.add('close');
        };

        const handleModeSwitch = () => {
            if (sidebarbody) {
                sidebarbody.classList.toggle('dark');
                if (sidebarbody.classList.contains('dark')) {
                    modeText.innerText = "Light mode";
                } else {
                    modeText.innerText = "Dark mode";
                }
            }
        };

        if (sidebar) {
            sidebar.addEventListener('mouseenter', handleMouseEnter);
            sidebar.addEventListener('mouseleave', handleMouseLeave);
        }

        if (modeSwitch) {
            modeSwitch.addEventListener('click', handleModeSwitch);
        }

        return () => {
            if (sidebar) {
                sidebar.removeEventListener('mouseenter', handleMouseEnter);
                sidebar.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (modeSwitch) {
                modeSwitch.removeEventListener('click', handleModeSwitch);
            }
        };
    }, []);
};

export default Sidebarhooks;

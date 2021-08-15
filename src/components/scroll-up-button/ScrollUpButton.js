import { useEffect, useState } from 'react';
import './ScrollUpButton.scss';

const ScrollUpButton = () => {
    const [buttonUp, setButton] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                setButton(true)
            } else {
                setButton(false)
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
        {buttonUp ? <button className="scroll-up-button" onClick={scrollUp}></button> : <p></p>}
        </>
    )
};

export default ScrollUpButton;
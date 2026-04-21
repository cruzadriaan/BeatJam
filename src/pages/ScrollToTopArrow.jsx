import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';

export const ScrollToTopArrow = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);

    }, []);

    return (
        <>
            {isVisible && (
                <div className='fixed left-1/2 transform translate-x-1/2 bottom-0 p-2 border border-gray-400 rounded-full w-10 cursor-pointer hover:bg-gray-200 animate-bounce '
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}>
                    <FontAwesomeIcon className='bg-transparent' icon={faAngleUp} />
                </div>

            )
            }
        </>
    );
}
import { useEffect, useRef, useState } from 'react';

export const useUnlock = ({ maxWidth }) => {
    const touchStartPosition = useRef(0);
    const touchStartTime = useRef(0);
    const touchEndPosition = useRef(0);
    const touchEndTime = useRef(0);
    const touchDistancePercent = useRef(0);

    const [elementMoving, setElementMoving] = useState(0);
    const [transitionSpeed, setTransitionSpeed] = useState('');

    const isUp = useRef(false);

    const goUp = (timeStringS = '.5s') => {
        document.body.classList.remove('no-scroll');
        setTransitionSpeed(timeStringS);
        setElementMoving(-100);
        isUp.current = true;
    };

    const goDown = (timeStringS = '.5s') => {
        document.body.classList.add('no-scroll');
        setTransitionSpeed(timeStringS);
        setElementMoving(0);
        isUp.current = false;
    };

    const handleTouchStart = (event) => {
        if (document.body.clientWidth > maxWidth) return;
        setTransitionSpeed('');

        touchStartPosition.current = event.touches[0].clientY;
        touchStartTime.current = Date.now();
    };

    const handleTouchMove = (event) => {
        if (document.body.clientWidth > maxWidth) return;

        const touchPosition = event.touches[0].clientY;
        const touchDistance = touchStartPosition.current - touchPosition;
        touchDistancePercent.current = (touchDistance * 100) / screen.height;

        if (touchDistance > 0) {
            setElementMoving(-touchDistancePercent.current);
        }
    };

    const handleTouchEnd = (event) => {
        if (document.body.clientWidth > maxWidth) return;

        touchEndPosition.current = event.changedTouches[0].clientY;
        touchEndTime.current = Date.now();

        const totalTime = touchEndTime.current - touchStartTime.current;
        const touchSpeed = touchDistancePercent.current / totalTime; // percent/ms

        if (touchDistancePercent.current >= 40 || touchSpeed > 0.1) {
            if (touchSpeed > 0.1) {
                goUp('.4s');
            } else {
                goUp('.5s');
            }
        } else {
            goDown('.4s');
        }
    };

    const screenInitialPosition = useRef(0);
    const screenEndPosition = useRef(0);

    useEffect(() => {
        const handleDocTouchMove = (event) => {
            if (!isUp.current) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }

            if (document.body.clientWidth < maxWidth && isUp.current) {
                if (
                    window.scrollY <= 0 &&
                    screenInitialPosition.current < event.touches[0].screenY
                ) {
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                    goDown('.4s');
                    window.scrollTo(0, 0);
                }
            }
        };

        const handleDocTouchStart = (event) => {
            if (document.body.clientWidth < maxWidth && isUp.current) {
                screenInitialPosition.current = event.touches[0].screenY;
            }
        };

        const handleDocTouchEnd = (event) => {
            if (document.body.clientWidth < maxWidth && isUp.current) {
                screenEndPosition.current = event.changedTouches[0].screenY;
            }
        };

        const handleScroll = (event) => {
            if (!isUp) {
                event.preventDefault();
            }
        };

        document.addEventListener('touchmove', handleDocTouchMove, {
            passive: false,
        });
        document.addEventListener('touchstart', handleDocTouchStart, true);
        document.addEventListener('touchend', handleDocTouchEnd, true);
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('touchmove', handleDocTouchMove, {
                passive: false,
            });
        };
    }, []);

    return {
        unLockEvents: {
            handleTouchEnd,
            handleTouchMove,
            handleTouchStart,
        },
        elementMoving,
        transitionSpeed,
        isUp: isUp.current,
        lock: goDown,
    };
};

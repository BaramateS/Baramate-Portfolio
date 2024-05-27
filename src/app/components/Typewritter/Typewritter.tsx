'use client';

import { useState, useEffect } from "react";

interface TypewritterProp {
    texts: string[],
    speed?: number
}

const Typewritter: React.FC<TypewritterProp> = ({ texts, speed = 100 }) => {

    const [displayText, setDisplayText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        let currentIndex = 0;
        let currentText = texts[currentTextIndex];
        const interval = setInterval(() => {
            setDisplayText((prevText) => {
                const nextChar = currentText[currentIndex];
                currentIndex++;

                if (currentIndex === currentText.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                        currentIndex = 0;
                        currentText = texts[currentTextIndex];
                    }, 1000);
                }
                return prevText + nextChar;
            });

            if (currentIndex === currentText.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [texts, speed, currentTextIndex]);

    return (
        <span>{displayText}</span>
    )
}

export default Typewritter
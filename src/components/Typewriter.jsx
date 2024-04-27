import React, { useState, useEffect } from 'react';
import { Cursor, TypewriterWrapper, StaticText, DynamicText} from "../style/TypewriterStyles";

const Typewriter = ({ staticText, dynamicPhrases, typingDelay = 200, deletingDelay = 100, pauseDelay = 1500 }) => {
    const [dynamicText, setDynamicText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = dynamicPhrases[index % dynamicPhrases.length];
        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setDynamicText(currentPhrase.slice(0, dynamicText.length - 1));
            }, deletingDelay);

            if (dynamicText === '') {
                setIsDeleting(false);
                setIndex((index + 1) % dynamicPhrases.length);
            }
        } else {
            timeout = setTimeout(() => {
                setDynamicText(currentPhrase.slice(0, dynamicText.length + 1));
            }, typingDelay);

            if (dynamicText === currentPhrase) {
                setTimeout(() => setIsDeleting(true), pauseDelay);
            }
        }

        return () => clearTimeout(timeout);
    }, [dynamicText, isDeleting, index, dynamicPhrases, typingDelay, deletingDelay, pauseDelay]);

    return (
        <TypewriterWrapper>
            <StaticText>{staticText}</StaticText>
            <DynamicText>{dynamicText}</DynamicText>
            <Cursor />
        </TypewriterWrapper>
    );
};
export default Typewriter

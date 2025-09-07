import {useState, useEffect, useRef} from "react";

const titles = [
    "Software Engineer",
    "Machine Learning Researcher", 
    "Amateur Violinist"
];

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function Typing() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const currentTitle = titles[currentTitleIndex];
        
        const interval = setInterval(() => {
            if (!isDeleting) {
                // Typing phase
                if (index < currentTitle.length) {
                    setText(currentTitle.substring(0, index + 1));
                    setIndex(index + 1);
                } else {
                    // Finished typing, wait then start deleting
                    clearInterval(interval);
                    timeoutRef.current = setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseTime);
                }
            } else {
                // Deleting phase
                if (index > 0) {
                    setText(currentTitle.substring(0, index - 1));
                    setIndex(index - 1);
                } else {
                    // Finished deleting, move to next title
                    setIsDeleting(false);
                    setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
                    setIndex(0);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => {
            clearInterval(interval);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [index, isDeleting, currentTitleIndex]);

    return (
        <div style={{ fontSize: '24px', minHeight: '30px' }}>
            {text}
            <span className="cursor">|</span>
        </div>
    )
}

export default Typing;
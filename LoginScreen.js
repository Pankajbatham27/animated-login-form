import { useState } from 'react';
import style from './LoginScreen.module.css';
import { useEffect } from 'react';

const LoginScreen = () => {


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        // Function to update screen dimensions on resize
        const updateDimensions = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        // Event listener to handle resize
        window.addEventListener('resize', updateDimensions);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const horizontal = () => {
        const horizontal = screenWidth / 50;

        const elements = [];

        for (let index = 0; index < horizontal; index++) {
            elements.push(<div key={index} className={`boxColor`} style={{ height: '50px', width: '50px', backgroundColor: '#1f1f1f', marginRight: '4px', display: 'inline-block' }}></div>)
        }
        return elements;

    }

    const showBoxes = () => {
        const vertical = screenHeight / 50;

        const elements = [];

        for (let index = 0; index < vertical; index++) {
            elements.push(<div key={index} className={style.boxCover}>
                {horizontal()}
            </div>)
        }
        return elements;
    }


    function resetBoxColor(element) {
        element.style.backgroundColor = "#1f1f1f";
    }


    useEffect(() => {
        // Attach hover event listener to all boxes
        const boxes = document.querySelectorAll(".boxColor");

        boxes.forEach((box) => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "#00f700"; // Change color on hover
            });

            box.addEventListener("mouseout", () => {
                // Revert color back to original after a delay (e.g., 1 second)
                setTimeout(() => {
                    resetBoxColor(box);
                }, 400);
            });
        });
    }, [])


    return (
        <div className={style.fullScreen}>
            {showBoxes()}

            <div className={style.loginContainer}>
                <div className={style.loginContent}>
                    <h1 className={style.welcomeText}>Welcome Back</h1>
                    <form className={style.loginForm}>
                        <input type="text" placeholder="Username" className={style.inputField} />
                        <input type="password" placeholder="Password" className={style.inputField} />
                        <button type="submit" className={style.loginButton}>Login</button>
                    </form>
                </div>
            </div>
        </div>


    )
}
export default LoginScreen;
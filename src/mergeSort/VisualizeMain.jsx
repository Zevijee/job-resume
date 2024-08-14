import { useState, useEffect } from 'react';
import './VisualizeMain.css';
import getMergeSortAnimations from './mergeSort.jsx';

function VisualizeSort() {
    const [array, setArray] = useState([]);
    const [sortAlgo, setSortAlgo] = useState('Merge Sort');

    const ANIMATION_SPEED_MS = 10;

    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'teal';

    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';
    

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const array = [];
        // get the width of the screen
        const width = window.innerWidth;
        console.log(width);        

        for (let i = 0; i < width/60; i++) {
            array.push(30 * i + 30);
        }
        shuffleArray(array);
        setArray(array);
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    if (array.length === 0) {
        return <div></div>;
    }

    function mergeSort() {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight * .3}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }


    return (
        <>
            <br />

            {array.map((value, idx) => (
                <div className="array-container" key={idx}>
                    <div
                        className="array-bar"
                        key={idx}
                        style={{ height: `${value * 0.3}px` }}
                    ></div>
                </div>
            ))}
            <br />
            <button onClick={resetArray}>Shuffle</button>
            <button onClick={mergeSort}>Sort</button>
        </>
    );
}

export default VisualizeSort;

import React from 'react';
import './Metronome.css';
import Timer from './timer';

const clickHi = new Audio('click_hi.wav');
const clickLo = new Audio('click_lo.wav');

let bpm = 90;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;

const playClick = () => {
    console.log(count);
    if (count === beatsPerMeasure) {
        count = 0;
    }

    if (count === 0) {
        clickHi.play();
        clickHi.currentTime = 0;
    } else {
        clickLo.play();
        clickLo.currentTime = 0;
    }
    count++;
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true });

const Metronome = () => {

    return (
        <div className='container'>
            <div className='bpm-output'>
                <p className='tempo'>90</p>
                <p className='bpm'>rpm</p>
            </div>
            <div className='set-tempo'>
                <div className='adjust-tempo dec-tempo'>-</div>
                <input type='range' min='40' max='280' step='1' className='slider'></input>
                <div className='adjust-tempo inc-tempo'>+</div>
            </div>
            <div className='start-stop'>start</div>
        </div>
    )
};

export default Metronome;
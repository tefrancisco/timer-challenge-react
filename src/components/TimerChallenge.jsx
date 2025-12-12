import { useState, useRef } from 'react'

// It won't work because even if it's not refreshed by state by being outside the component,
// it will be overwrite if I click in another challenge
let timer;

export default function TimerChallenge({ title, targetTime }) {

    // We have to manage timer, but it shouldn't be a state, so it will be a ref
    const timer = useRef()

    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)

        setTimerStarted(true)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <section className="challenge">
            <h1>{title}</h1>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            {/* If time has expired, then render the p tag with lost text */}
            {timerExpired && <p>You lost</p>}
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}
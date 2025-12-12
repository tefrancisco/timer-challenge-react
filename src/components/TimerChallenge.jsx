import { useState } from 'react'

export default function TimerChallenge({ title, targetTime }) {

    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)

        setTimerStarted(true)
    }

    function handleStop() {
        
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
                <button onClick={handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}
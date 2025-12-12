export default function TimerChallenge({ title, targetTime }) {
    return (
        <section className="challenge">
            <h1>{title}</h1>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>
                    Start Challenge
                </button>
            </p>
            <p className="">
                Time is running / Timer inactive
            </p>
        </section>
    )
}
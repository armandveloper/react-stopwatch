import React, { useState, useEffect } from 'react';

function App() {
	const [playing, setPlaying] = useState(false);
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	useEffect(() => {
		if (playing) {
			const interval = setInterval(() => {
				if (minutes === 59) {
					setHours(hours + 1);
					setMinutes(0);
				}
				if (seconds === 59) {
					setMinutes(minutes + 1);
					setSeconds(0);
				} else {
					setSeconds(seconds + 1);
				}
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [playing, seconds, minutes, hours]);

	return (
		<div className="stopwatch">
			<div className="stopwatch-wrapper">
				<span className="time">
					{hours < 10 ? '0' + hours : hours}:
				</span>
				<span className="time">
					{minutes < 10 ? '0' + minutes : minutes}.
				</span>
				<span className="time">
					{seconds < 10 ? '0' + seconds : seconds}
				</span>
			</div>
			<div className="buttons-wrapper">
				{playing ? (
					<button
						type="button"
						className="button-action button-pause"
						onClick={() => setPlaying(false)}
					>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-pause icon-pause"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
							/>
						</svg>
					</button>
				) : (
					<button
						type="button"
						className="button-action button-play"
						onClick={() => setPlaying(true)}
					>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-play-fill icon-play"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
						</svg>
					</button>
				)}
				{playing || seconds > 0 || minutes > 0 || hours > 0 ? (
					<button
						type="button"
						className="button-action button-stop"
						onClick={() => {
							setPlaying(false);
							setSeconds(0);
							setMinutes(0);
							setHours(0);
						}}
					>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-stop-fill icon-stop"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
						</svg>
					</button>
				) : null}
			</div>
		</div>
	);
}

export default App;

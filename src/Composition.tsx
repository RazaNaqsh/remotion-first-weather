import {useVideoConfig} from 'remotion';

export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: 'black',
				textAlign: 'center',
				color: 'red',
				fontSize: '5rem',
			}}
		>
			Hello There Remotion😎
			<p>I made a {durationInFrames / fps} second video</p>
			<p>
				Of Resolution {height}X{width}px
			</p>
		</div>
	);
};

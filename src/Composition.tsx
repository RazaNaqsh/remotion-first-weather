import {useVideoConfig, useCurrentFrame} from 'remotion';
import {France} from './France';

export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = frame / durationInFrames;

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: 'black',
				textAlign: 'center',
				color: 'red',
				fontSize: '5rem',
				opacity,
			}}
		>
			Hello There Remotion😎
			<France />
		</div>
	);
};

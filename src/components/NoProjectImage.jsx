import noProjectImg from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectImage({ onClickAddButton }) {
	return (
		<div className="flex flex-col w-full h-full pt-10 justify-start items-center">
			<img className="w-24" src={noProjectImg}></img>
			<h1 className="text-3xl font-bold text-stone-600 mt-6">
				No Project Selected
			</h1>
			<p className="text-stone-500 text-xl mt-6">
				Select a project or get started with a new one
			</p>
			<p className="mt-8">
				<Button onClick={onClickAddButton}>Create New Project</Button>
			</p>
		</div>
	);
}

import Button from './Button';
export default function Sidebar({
	onClickAddButton,
	onClickEditProject,
	projects,
	activeProjectIndex,
}) {
	return (
		<aside className="w-1/4 bg-black text-white py-10 px-8 rounded-tr-2xl">
			<h2 className="my-10 text-2xl font-bold uppercase">Your projects</h2>
			<Button onClick={onClickAddButton}>+ Add project</Button>
			<ul className="mt-10">
				{projects.map((e, index) => (
					<li
						key={index}
						className={`rounded-sm hover:bg-stone-800 ${
							activeProjectIndex === index && ' bg-stone-900'
						}`}
					>
						<button
							className="w-full p-2 text-left"
							onClick={() => onClickEditProject(index)}
						>
							{e.title}
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
}

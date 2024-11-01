import Tasks from './Tasks';
export default function EditProject({
	title,
	description,
	date,
	taskList,
	onAddTask,
	onClearTask,
	onDeleteProject,
	index,
}) {
	function handleDeleteProject() {
		onDeleteProject(index);
	}
	return (
		<div>
			<div className="flex justify-between">
				<h2 className="text-4xl font-bold text-stone-700">{title}</h2>
				<button
					className="text-xl text-stone-700 hover:text-stone-500"
					onClick={handleDeleteProject}
				>
					Delete
				</button>
			</div>
			<p className="text-stone-400 text-lg mt-4">{date}</p>
			<p className="text-lg text-stone-700 mt-4 mb-6">{description}</p>
			<Tasks
				taskList={taskList}
				projectIndex={index}
				onAddTask={onAddTask}
				onClearTask={onClearTask}
			/>
		</div>
	);
}

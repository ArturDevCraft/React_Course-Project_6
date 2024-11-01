import { useRef } from 'react';

export default function Tasks({
	taskList,
	onAddTask,
	onClearTask,
	projectIndex,
}) {
	const newTask = useRef();

	function handleAddTask() {
		onAddTask(newTask.current.value, projectIndex);
		newTask.current.value = '';
	}

	function handleClearTask(projectIndex, taskIndex) {
		onClearTask(projectIndex, taskIndex);
	}
    
	return (
		<div className="border-t-2 border-stone-300 pt-6">
			<h3 className="text-3xl font-bold text-stone-700 mb-6">Tasks</h3>
			<input className="bg-stone-300 p-2" ref={newTask} type="text" />
			<button
				className="text-lg ml-6 hover:text-green-700"
				onClick={handleAddTask}
			>
				Add Task
			</button>
			<ul className="flex flex-col mt-8 bg-stone-200 py-6 px-4">
				{taskList.map((task, index) => (
					<li className="flex justify-between py-2 text-lg" key={index}>
						{task}{' '}
						<button
							className=" hover:text-red-700"
							onClick={() => handleClearTask(projectIndex, index)}
						>
							Clear
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

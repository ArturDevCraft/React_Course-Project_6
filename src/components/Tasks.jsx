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
		<div>
			<h3>Tasks</h3>
			<input ref={newTask} type="text" />
			<button onClick={handleAddTask}>Add Task</button>
			<ul className="flex flex-col">
				{taskList.map((task, index) => (
					<li className="flex justify-between" key={index}>
						{task} <button onClick={() => handleClearTask(projectIndex,index)}>Clear</button>
					</li>
				))}
			</ul>
		</div>
	);
}

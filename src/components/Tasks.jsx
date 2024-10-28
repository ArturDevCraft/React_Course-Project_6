import { useRef } from 'react';

export default function Tasks({ taskList, onAddTask, projectIndex }) {
	const newTask = useRef();
    
	function handleAddTask() {
		onAddTask(newTask.current.value, projectIndex);
		newTask.current.value = '';
	}
	return (
		<div>
			<h3>Tasks</h3>
			<input ref={newTask} type="text" />
			<button onClick={handleAddTask}>Add Task</button>
			<ul className="flex flex-col">
				{taskList.map((task, index) => (
					<li className="flex justify-between" key={index}>
						{task} <button>Clear</button>
					</li>
				))}
			</ul>
		</div>
	);
}

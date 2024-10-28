export default function Tasks({ taskList }) {
	return (
		<div>
			<h3>Tasks</h3>
			<input type="text" /> <button>Add Task</button>
			<ul className="flex flex-col">
				{taskList.map((t, index) => (
					<li className="flex justify-between" key={index}>
						{t} <button>Clear</button>
					</li>
				))}
			</ul>
		</div>
	);
}

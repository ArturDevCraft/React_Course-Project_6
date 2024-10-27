export default function EditProject({ title, description, date }) {
	return (
		<div>
			<div className="flex justify-between">
				<h2>{title}</h2> <button>Delete</button>
			</div>
			<p>{date}</p>
			<p>{description}</p>
		</div>
	);
}

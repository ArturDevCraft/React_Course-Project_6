import Sidebar from './Sidebar';
import AddProject from './AddProject';
function App() {
	let yourProjects = [];

	function handleSaveProject(title, description, date) {
		yourProjects.push({
			title: title,
			description: description,
			date: date,
		});

		console.log(yourProjects);
	}

	return (
		<main className="flex flex-row justify-stretch h-dvh pt-10">
			<Sidebar />
			<section id="workspace" className="py-16 px-8 grow">
				<AddProject onSave={handleSaveProject} />
			</section>
		</main>
	);
}

export default App;

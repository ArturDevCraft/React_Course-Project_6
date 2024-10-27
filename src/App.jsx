import { useState } from 'react';
import Sidebar from './Sidebar';
import AddProject from './AddProject';
function App() {
	let yourProjects = [];
	const [showAddProject, setShowAddProject] = useState(false);
	function handleSaveProject(title, description, date) {
		yourProjects.push({
			title: title,
			description: description,
			date: date,
		});

		console.log(yourProjects);
	}

	function handleShowAddProject() {
		setShowAddProject(true);
	}

	function handleCloseAddProject() {
		setShowAddProject(false);
	}

	return (
		<main className="flex flex-row justify-stretch h-dvh pt-10">
			<Sidebar onClickAddButton={handleShowAddProject} />
			<section id="workspace" className="py-16 px-8 grow">
				{showAddProject && (
					<AddProject
						onSave={handleSaveProject}
						onClose={handleCloseAddProject}
					/>
				)}
			</section>
		</main>
	);
}

export default App;

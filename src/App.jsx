import { useState } from 'react';
import Sidebar from './Sidebar';
import AddProject from './AddProject';
function App() {
	const [yourProjects, setYourProjects] = useState([]);
	const [whatInWorkspace, setWhatInWorkspace] = useState(false);

	function handleSaveProject(title, description, date) {
		setYourProjects((prevProjects) => {
			const updatedYourProjects = [
				{
					title: title,
					description: description,
					date: date,
				},
				...prevProjects,
			];

			return updatedYourProjects;
		});
	}

	function handleShowInWorkspace(view) {
		setWhatInWorkspace(view);
	}

	function handleCloseWorkspace() {
		setWhatInWorkspace(false);
	}

	function handleEditProject(index) {
		console.log(index);
	}

	return (
		<main className="flex flex-row justify-stretch h-dvh pt-10">
			<Sidebar
				onClickAddButton={()=>handleShowInWorkspace('add')}
				onClickEditProject={handleEditProject}
				projects={yourProjects}
			/>
			<section id="workspace" className="py-16 px-8 grow">
				{whatInWorkspace === 'add' && (
					<AddProject
						onSave={handleSaveProject}
						onClose={handleCloseWorkspace}
					/>
				)}

				{}
			</section>
		</main>
	);
}

export default App;

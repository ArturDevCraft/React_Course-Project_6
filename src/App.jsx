import { useState } from 'react';
import Sidebar from './components/Sidebar';
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';

function App() {
	const [yourProjects, setYourProjects] = useState([
		{
			title: 'First project',
			description:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.',
			date: '10/28/2024',
			tasks: ['Do something', 'Do something else'],
		},
	]);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [whatInWorkspace, setWhatInWorkspace] = useState(false);

	function handleSaveProject(title, description, date) {
		setYourProjects((prevProjects) => {
			const updatedYourProjects = [
				{
					title: title,
					description: description,
					date: date,
					tasks: [],
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
		setWhatInWorkspace('edit');
		setCurrentProjectIndex(index);
	}

	return (
		<main className="flex flex-row justify-stretch h-dvh pt-10">
			<Sidebar
				onClickAddButton={() => handleShowInWorkspace('add')}
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

				{whatInWorkspace === 'edit' && (
					<EditProject {...yourProjects[currentProjectIndex]} />
				)}
			</section>
		</main>
	);
}

export default App;

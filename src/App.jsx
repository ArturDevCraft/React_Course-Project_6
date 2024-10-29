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
			taskList: ['Do something', 'Do something else'],
		},
	]);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [whatInWorkspace, setWhatInWorkspace] = useState(false);

	function saveProject(title, description, date) {
		setYourProjects((prevProjects) => {
			const updatedYourProjects = [
				{
					title: title,
					description: description,
					date: date,
					taskList: [],
				},
				...prevProjects,
			];

			return updatedYourProjects;
		});
	}

	function deleteProject(index) {
		handleCloseWorkspace();
		setYourProjects((prevProjects) => {
			let updatedProjects = [...prevProjects];
			updatedProjects = [...updatedProjects.filter((e, i) => i !== index)];
			return updatedProjects;
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

	function addNewTask(task, projectIndex) {
		setYourProjects((prevProjects) => {
			const updatedProjects = [...prevProjects];

			updatedProjects[projectIndex] = {
				...updatedProjects[projectIndex],
				taskList: [...updatedProjects[projectIndex].taskList, task],
			};

			return updatedProjects;
		});
	}

	function clearTask(projectIndex, taskIndex) {
		setYourProjects((prevProjects) => {
			const updatedProjects = [...prevProjects];
			updatedProjects[projectIndex] = {
				...prevProjects[projectIndex],
				taskList: [
					...prevProjects[projectIndex].taskList.filter(
						(e, i) => i !== taskIndex
					),
				],
			};
			return updatedProjects;
		});
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
					<AddProject onSave={saveProject} onClose={handleCloseWorkspace} />
				)}

				{whatInWorkspace === 'edit' && (
					<EditProject
						{...yourProjects[currentProjectIndex]}
						index={currentProjectIndex}
						onAddTask={addNewTask}
						onClearTask={clearTask}
						onDeleteProject={deleteProject}
					/>
				)}
			</section>
		</main>
	);
}

export default App;

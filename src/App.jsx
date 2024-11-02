import { useState } from 'react';
import Sidebar from './components/Sidebar';
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';
import NoProjectImage from './components/NoProjectImage';

function App() {
	const [yourProjects, setYourProjects] = useState(getDataFromLocalStorage);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [whatInWorkspace, setWhatInWorkspace] = useState(false);

	function saveDataInLocalStorage(projects) {
		localStorage.setItem('yourProjects', JSON.stringify(projects));
	}

	function getDataFromLocalStorage() {
		const projectsString = localStorage.getItem('yourProjects');
		const projectsArray = projectsString ? JSON.parse(projectsString) : null;

		if (projectsArray === null) {
			return [];
		} else {
			return projectsArray;
		}
	}

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
			saveDataInLocalStorage(updatedYourProjects);
			return updatedYourProjects;
		});
	}

	function deleteProject(index) {
		handleCloseWorkspace();
		setYourProjects((prevProjects) => {
			let updatedProjects = [...prevProjects];
			updatedProjects = [...updatedProjects.filter((e, i) => i !== index)];
			saveDataInLocalStorage(updatedProjects);
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
			saveDataInLocalStorage(updatedProjects);
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
			saveDataInLocalStorage(updatedProjects);
			return updatedProjects;
		});
	}

	// getDataFromLocalStorage();

	return (
		<main className="flex flex-row justify-stretch h-dvh pt-10">
			<Sidebar
				onClickAddButton={() => handleShowInWorkspace('add')}
				onClickEditProject={handleEditProject}
				projects={yourProjects}
				activeProjectIndex={currentProjectIndex}
			/>
			<section
				id="workspace"
				className="py-16 px-8 max-w-screen-lg w-3/4 min-w-[400px]"
			>
				{!whatInWorkspace && (
					<NoProjectImage
						onClickAddButton={() => handleShowInWorkspace('add')}
					/>
				)}

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

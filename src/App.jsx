import Sidebar from './Sidebar';
import AddProject from './AddProject';
function App() {
	return (
		<main className="flex flex-column justify-stretch h-dvh pt-10">
			<Sidebar />
			<section id="workspace" className="py-10 px-8 grow">
				<AddProject />
			</section>
		</main>
	);
}

export default App;

export default function Sidebar() {
	return (
		<aside className="w-1/4 bg-black text-white py-10 px-8 rounded-tr-2xl">
			<h2 className="my-10 text-2xl font-bold uppercase">Your projects</h2>
			<button className="text-lg bg-stone-700 text-stone-400 rounded-md py-3 px-6 hover:bg-stone-600">
				+ Add project
			</button>
		</aside>
	);
}

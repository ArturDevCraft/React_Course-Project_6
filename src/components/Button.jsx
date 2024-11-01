export default function Button({ children, ...props }) {
	return (
		<button
			{...props}
			className="text-lg bg-stone-700 text-stone-400 rounded-md py-3 px-6 hover:bg-stone-600"
		>
			{children}
		</button>
	);
}

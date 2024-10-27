import { useRef } from 'react';

export default function AddProject({ onSave }) {
	const labelClassName = 'uppercase font-bold text-lg  text-stone-500 mt-6';
	const inputClassName =
		'p-2 bg-stone-200 text-lg text-stone-600 rounded-sm focus:outline-none focus:border-b-4 focus:border-stone-500';
	const title = useRef();
	const description = useRef();
	const date = useRef();
	function handleSave() {
		onSave(title.current.value, description.current.value, date.current.value);
		title.current.value = '';
		description.current.value = '';
		date.current.value = '';
	}

	return (
		<div className="">
			<div className="flex flex-row justify-end gap-x-4 gap-y-2">
				<button className="">Cancel</button>
				<button
					onClick={handleSave}
					className="bg-black rounded-md text-stone-200 py-3 px-6"
				>
					Save
				</button>
			</div>

			<form className="flex flex-col pt-6">
				<label htmlFor="title" className={labelClassName}>
					Title
				</label>
				<input ref={title} id="title" type="text" className={inputClassName} />
				<label htmlFor="description" className={labelClassName}>
					Description
				</label>
				<textarea
					ref={description}
					id="description"
					className={inputClassName}
				></textarea>

				<label htmlFor="date" className={labelClassName}>
					Due date
				</label>
				<input ref={date} type="date" id="date" className={inputClassName} />
			</form>
		</div>
	);
}

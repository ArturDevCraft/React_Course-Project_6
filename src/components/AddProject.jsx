import { useRef } from 'react';
import Modal from './Modal.jsx';

export default function AddProject({ onSave, onClose }) {
	const labelClassName = 'uppercase font-bold text-lg  text-stone-500 mt-6';
	const inputClassName =
		'p-2 bg-stone-200 text-lg text-stone-600 rounded-sm focus:outline-none focus:border-b-4 focus:border-stone-500';

	const title = useRef();
	const description = useRef();
	const date = useRef();

	const modal = useRef();

	function handleSave() {
		if (
			title.current.value.trim() === '' ||
			description.current.value.trim() === '' ||
			date.current.value.trim() === ''
		) {
			modal.current.open();
		}

		onSave(title.current.value, description.current.value, date.current.value);
		title.current.value = '';
		description.current.value = '';
		date.current.value = '';
	}

	function handleClose() {
		title.current.value = '';
		description.current.value = '';
		date.current.value = '';
		onClose();
	}

	return (
		<div className="">
			<Modal ref={modal}>
				<h2 className="text-3xl font-bold text-stone-600">Invalid input</h2>
				<p className="text-stone-500 text-xl mt-6">
					Please enter valid value for every field
				</p>
			</Modal>
			<div className="flex flex-row justify-end gap-x-4 gap-y-2">
				<button onClick={handleClose} className="">
					Cancel
				</button>
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

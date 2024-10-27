import { createPortal } from 'react-dom';
export default function AddProject() {
	const labelClassName = '';
	const inputClassName = '';

	return createPortal(
		<div className="">
			<div>
				<button>Cancel</button>
				<button>Save</button>
			</div>

			<form>
				<label htmlFor="title" className={labelClassName}>
					Title
				</label>
				<input id="title" type="text" className={inputClassName} />
				<label htmlFor="description" className={labelClassName}>
					Description
				</label>
				<textarea id="description"></textarea>

				<label htmlFor="date" className={labelClassName}>
					Due date
				</label>
				<input type="date" name="" id="date" />
			</form>
		</div>,
		document.getElementById('workspace')
	);
}

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
	const dialog = useRef();
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog ref={dialog} className="rounded-md backdrop:bg-stone-900/90 p-5 ">
			{children}
			<form method="dialog" className="mt-6 text-right">
				<button className="bg-black rounded-md text-stone-400 py-3 px-6 hover:text-stone-300">
					Close
				</button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	);
});

export default Modal;

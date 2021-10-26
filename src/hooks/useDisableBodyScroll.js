import { useEffect } from 'react';

export function useDisableBodyScroll(open) {
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [open]);
}

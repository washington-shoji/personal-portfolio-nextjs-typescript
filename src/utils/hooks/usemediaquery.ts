import { useState, useEffect } from 'react';

// Usage const isMedium = useMediaQuery('(min-width: 900px)');

export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState<boolean>(false);

	useEffect(() => {
		const media: MediaQueryList = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		function listener(): void {
			setMatches(media.matches);
		}
		window.addEventListener('resize', listener);
		return () => window.removeEventListener('resize', listener);
	}, [matches, query]);

	return matches;
}

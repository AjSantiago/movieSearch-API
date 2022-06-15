import { Search } from '../components/Search';
import { MoviesGrid } from '../components/MoviesGrid';
import { useDebounce } from '../hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';

export function LandingPage() {
	const [query] = useSearchParams();
	const search = query.get('search');

	const debouncedsearch = useDebounce(search, 500);

	return (
		<div>
			<Search />
			<MoviesGrid key={debouncedsearch} search={debouncedsearch} />;
		</div>
	);
}

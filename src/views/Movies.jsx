import React from 'react';
import MoviesList from '../components/MoviesList';
import Navbar from '../components/Navbar';
import { useQuery } from '../hooks/useQuery';
import { useDebounce } from '../hooks/useDebounce';
import Footer from '../components/Footer';

export default function Movies() {
	const query = useQuery();
	const search = query.get('search');
	const debouncedSearch = useDebounce(search, 300);

	return (
		<>
			<Navbar />
			<main className='content'>
				<h2>All Movies</h2>
				<MoviesList key={debouncedSearch} search={debouncedSearch} />
			</main>
			<Footer />
		</>
	);
}

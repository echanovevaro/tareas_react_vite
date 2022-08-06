import { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { Listado } from './components/Listado';

function App() {
	const [notas, setNotas] = useState([]);
	const [nota, setNota] = useState({});

	useEffect(() => {
		const notasLS = JSON.parse(
			localStorage.getItem('notas', notas),
		);
		console.log('RECUPERAR', notasLS);
		if (notasLS) {
			setNotas(notasLS);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('notas', JSON.stringify(notas));
		console.log('GUARDAR', notas);
	}, [notas]);

	const handleClickDelete = (id) => {
		console.log('BorrarNota', id);
		const notasFiltradas = notas.filter(
			(nota) => nota.id !== id,
		);
		setNotas(notasFiltradas);
	};
	return (
		<>
			<Header />
			<div className='container'>
				<Formulario
					setNotas={setNotas}
					setNota={setNota}
					notas={notas}
					nota={nota}
				/>

				<Listado
					notas={notas}
					setNota={setNota}
					// setNotas={setNotas}
					handleClickDelete={handleClickDelete}
				/>
			</div>
		</>
	);
}

export default App;

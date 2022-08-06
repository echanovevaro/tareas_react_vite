import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Error } from './Error';

export const Formulario = ({
	notas,
	setNotas,
	nota,
	setNota,
}) => {
	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(nota).length > 0) {
			setForm(nota);
		}
	}, [nota]);

	const generarId = () => {
		const fecha = Date.now().toString(36);
		const random = Math.random().toString(36).substr(2);
		return fecha + random;
	};

	const {
		setForm,
		tarea,
		responsable,
		email,
		alta,
		detalles,
		onInputChange,
		reset,
	} = useForm({
		tarea: '',
		responsable: '',
		email: '',
		alta: '',
		detalles: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			[tarea, responsable, email, alta, detalles].includes('')
		) {
			console.log('algo esta vacio');
			setError(true);
			return;
		}

		setError(false);
		const objetoNota = {
			tarea,
			responsable,
			email,
			alta,
			detalles,
		};
		if (nota.id) {
			//Editando el registro
			objetoNota.id = nota.id;

			//comprobamos de entre todas las notas cual es la que se va a editar, las demas se mantienen igual

			const notasActualizadas = notas.map(
				(notaState) =>
					(notaState.id = nota.id ? objetoNota : notaState),
			);

			setNotas(notasActualizadas);
			setNota({});
		} else {
			//Agregando un nuevo registro
			objetoNota.id = generarId();
			setNotas([...notas, objetoNota]);
		}

		reset();
	};

	return (
		<div className='formulario'>
			<h2>Seguimiento de Tareas {''}</h2>
			<p>
				Añade Tareas y <span>Adminístralas</span>
			</p>
			{error && (
				<Error>
					<p>Todos los campos son obligatorios</p>
				</Error>
			)}

			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='tarea'>Nombre de la Tarea</label>
					<input
						type='text'
						placeholder='Nombre de la Tarea'
						name='tarea'
						id='tarea'
						value={tarea}
						onChange={onInputChange}
					/>
				</div>
				<div>
					<label htmlFor='responsable'>
						Responsable de la Tarea
					</label>
					<input
						type='text'
						placeholder='Responsable de la Tarea'
						name='responsable'
						id='responsable'
						value={responsable}
						onChange={onInputChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						placeholder='email'
						name='email'
						id='email'
						value={email}
						onChange={onInputChange}
					/>
				</div>
				<div>
					<label htmlFor='alta'>Alta</label>
					<input
						type='date'
						name='alta'
						id='alta'
						value={alta}
						onChange={onInputChange}
					/>
				</div>
				<div>
					<label htmlFor='detalles'>Detalles</label>
					<textarea
						name='detalles'
						id='detalles'
						placeholder='Detalles de la tarea'
						value={detalles}
						onChange={onInputChange}
					/>
				</div>
				<button type='submit' className='button-submit'>
					{nota.id ? 'Editar Tarea' : ' Añadir Tarea'}
				</button>
			</form>
		</div>
	);
};

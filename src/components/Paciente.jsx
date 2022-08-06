export const Paciente = ({
	nota,
	setNota,
	handleClickDelete,
	// notas,
	// setNotas,
}) => {
	const { tarea, responsable, email, fecha, detalles, id } =
		nota;

	const handleClickEdit = () => {
		setNota(nota);
	};
	// const handleClickDelete = (id) => {
	// 	console.log('BorrarNota', id);
	// const newNotas = notas.filter((nt) => nt.id !== nota.id);

	// setNotas(newNotas);
	// };
	const EliminarTarea = () => {
		const respuesta = confirm('Eliminar tarea?');

		if (respuesta) {
			handleClickDelete(id);
		}
	};

	return (
		<div className='tarea'>
			<p>
				Tarea: {''}
				<span>{tarea} </span>
			</p>
			<p>
				Responsable: {''}
				<span>{responsable}</span>
			</p>
			<p>
				email: {''}
				<span>{email}</span>
			</p>
			<p>
				fecha de alta: {''}
				<span>{fecha} </span>
			</p>
			<p>
				Detalles: {''}
				<span>{detalles}</span>
			</p>
			<div className='editar-eliminar'>
				<button className='btn-edit' onClick={handleClickEdit}>
					Editar
				</button>
				<button className='btn-del' onClick={EliminarTarea}>
					Eliminar
				</button>
			</div>
		</div>
	);
};

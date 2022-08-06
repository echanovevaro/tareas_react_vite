import { Paciente } from './Paciente';

export const Listado = ({
	notas,
	setNota,
	setNotas,
	handleClickDelete,
}) => {
	return (
		<>
			<div className='listado'>
				{notas && notas.length ? (
					<>
						<h2>Listado de tareas</h2>
						<p>
							Administra tus <span>TAREAS</span>
						</p>
					</>
				) : (
					<>
						<h2>Añade de tareas</h2>
						<p>
							Comienza agregando <span>NUEVAS TAREAS</span>
						</p>
					</>
				)}

				{notas.map((nota) => (
					<Paciente
						nota={nota}
						key={nota.id}
						setNota={setNota}
						// setNotas={setNotas}
						notas={notas}
						handleClickDelete={handleClickDelete}
					/>
				))}
			</div>
		</>
	);
};

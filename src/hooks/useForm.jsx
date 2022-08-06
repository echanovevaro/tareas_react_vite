import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	const [form, setForm] = useState(initialForm);

	const reset = () => {
		setForm(initialForm);
	};

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setForm({ ...form, [name]: value });
	};

	return {
		...form,
		setForm,
		reset,
		onInputChange,
	};
};

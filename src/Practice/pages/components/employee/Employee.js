import React, { useState } from "react";
import EmployeeLisst from "./EmployeeLisst";
import person from "./image/person.jpg";
import { v4 as uuidv4 } from "uuid";

export default function Employee() {
	// const id = uuidv4();
	const [newName, setNewName] = useState(" ");
	const [newRole, setNewRole] = useState(" ");
	const [image, setImage] = useState(" ");

	const [employee, setEmployee] = useState([
		{
			id: 1,
			name: "me",
			role: "you",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/8/80/Akon_DF2_4639_%2847859034612%29_%28cropped%29.jpg",
		},
		{
			id: 2,
			name: "me",
			role: "you",
			image: person,
		},
	]);

	const addEmployee = (newName, newRole, image) => {
		const newEmployee = {
			id: uuidv4(),
			name: newName,
			role: newRole,
			image: image,
		};
		setEmployee((prevEmployee) => [
			...prevEmployee,
			newEmployee,
		]);
		console.log(employee);
	};

	const updates = (employeee) => {
		const updated = employee.map((emp) => {
			if (emp.id == employee.id) {
				return {
					...employee,
					emp: employeee,
				};
			}
		});

		setEmployee(updated);
		console.log(updated);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addEmployee(newName, newRole, image);
		setImage("");
		setNewName("");
		setNewRole("");
	};

	const handleDelete = (id) => {
		const newArr = [...employee].filter(
			(prv) => prv.id !== id
		);
		setEmployee(newArr);
	};
	// console.log(employee.id);
	return (
		<div>
			<p>These are the employee</p>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center justify-center gap-3 bg-transparent "
			>
				<input
					className="px-4 py-1 text-xl rounded-lg focus:outline-none"
					type="text"
					required
					value={newName}
					onChange={(e) => setNewName(e.target.value)}
				/>
				<input
					className="px-4 py-1 text-xl rounded-lg focus:outline-none"
					type="text"
					value={newRole}
					required
					onChange={(e) => setNewRole(e.target.value)}
				/>
				<input
					className="px-4 py-1 text-xl rounded-lg focus:outline-none"
					type="text"
					value={image}
					placeholder="https://unsplash.com/photos/vAVGdV1oklQ"
					onChange={(e) => setImage(e.target.value)}
				/>
				<button
					className="px-4 py-1 text-2xl font-bold text-white bg-gray-900 rounded-2xl hover:scale-105"
					type="submit"
				>
					Submit
				</button>
			</form>
			<div className="flex flex-wrap items-center justify-center">
				<EmployeeLisst
					employee={employee}
					updates={updates}
					handleDelete={handleDelete}
				/>
			</div>
		</div>
	);
}

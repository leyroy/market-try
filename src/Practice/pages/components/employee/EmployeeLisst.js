import React, { useState } from "react";

export default function EmployeeLisst(props) {
	const [update, setUpdat] = useState({
		id: null,
		newName: " ",
		newRoll: " ",
		image: " ",
	});

	const handleSubmitUpdate = () => {
		const updatedTedEmployee = {
			id: update.id,
			newName: update.newName,
			newRoll: update.newRoll,
			image: update.image,
		};
		props.updates({ updatedTedEmployee });
	};

	const handleOnUpdateButtom = (id) => {
		props.employee.map((employee) => {
			if (employee.id === id) {
				setUpdat(employee);
			}
		});
	};

	if (update.id) {
		return (
			<form
				className="flex gap-3 p-2 bg-gray-500 "
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmitUpdate();
				}}
				key={update.id}
			>
				<input
					className="px-5 py-1 "
					type="text"
					value={update.name}
					onChange={(e) =>
						setUpdat({ ...update, name: e.target.value })
					}
				/>
				<input
					className="px-5 py-1 "
					type="text"
					value={update.role}
					onChange={(e) =>
						setUpdat({ ...update, role: e.target.value })
					}
				/>
				<input
					className="px-5 py-1 "
					type="text"
					value={update.image}
					onChange={(e) =>
						setUpdat({ ...update, image: e.target.value })
					}
				/>

				<button
					onClick={() => handleSubmitUpdate(update)}
					className="px-4 py-2 rounded-lg bg-sky-600"
				>
					submit Updats
				</button>
			</form>
		);
	}
	return props.employee.map((employee) => {
		return (
			<div
				key={employee.id}
				className="bg-slate-300 drop-shadow-2xl rounded-md max-w-[350px] min-w-[250px] px-4 py-2 m-7"
			>
				<div
					className="flex items-center justify-between"
					key={employee.id}
				>
					<div className="w-[70%] border-b-slate-900">
						<div className="mb-4 text-xl font-extrabold">
							{employee.name}
						</div>
						<div>{employee.role}</div>
					</div>
					<div className="ml-2 ">
						<img
							className="w-20 h-20 border rounded-3xl border-emerald-400 "
							src={employee.image}
						/>
					</div>
				</div>
				<div className="flex items-center justify-end gap-4 ">
					<button
						onClick={() => handleOnUpdateButtom(employee.id)}
						className="p-2 mt-4 text-white bg-red-800 rounded-md"
					>
						Updat
					</button>
					<button
						onClick={() => props.handleDelete(employee.id)}
						className="p-2 mt-4 text-white bg-green-800 rounded-md"
					>
						Delete
					</button>
				</div>
			</div>
		);
	});
}

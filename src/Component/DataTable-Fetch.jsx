import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";
import "../Styles/DatatableFetch.css";

export const DataTableFecth = () => {
	//1  Configurar los Hooks
	const [user, setUser] = useState([]);

	useEffect(() => {
		showData();
	}, []);

	//2 Funcion para mostrar datos con Fecth
	const url = "https://gorest.co.in/public/v2/users";
	const showData = async () => {
		const res = await fetch(url);
		const data = await res.json();
		//console.log(data);
		setUser(data);
	};
	//3 Configurar Columnas para DataTable
	const columns = [
		{
			name: "ID",
			selector: (row) => row.id
		},
		{
			name: "EMAIl",
			selector: (row) => row.name
		},
		{
			name: "EMAIL",
			selector: (row) => row.email
		}
	];

	createTheme("custom", {
		text: {
			primary: "#268bd2",
			secundary: "#aa198"
		},
		background: { default: "#002b36" },
		context: {
			background: "#cb4b16",
			text: "#ffffff"
		}
	});
	//4 Mostrar Datos

	return (
		<DataTable
			columns={columns}
			data={user}
			// theme='custom'
			pagination
		/>
	);
};

import { DataTableFecth } from "./Component/DataTable-Fetch";
import { DataTableBasic } from "./Component/DataTableBasic";

import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<p>Data Table Basic</p>
			{/* <DataTableBasic/> */}
			<DataTableFecth />
		</div>
	);
}

import DataTable from "react-data-table-component";

const data = [
	{
		id: 1,
		name: "Jorge",
		age: 25
	},
	{
		id: 2,
		name: "Jorge",
		age: 25
	},
	{
		id: 3,
		name: "Jorge",
		age: 25
	},
	{
		id: 4,
		name: "Jorge",
		age: 25
	}
];

const columns = [
	{
		name: "ID",
		selector: (row) => row.id
	},
	{
		name: "NAME",
		selector: (row) => row.name
	},
	{
		name: "AGE",
		selector: (row) => row.age
	}
];

export const DataTableBasic = () => {
	return <DataTable columns={columns} data={data} />;
};

interface courseTableProps {
    courseTableProps: {
        headerText: string;
        tables: {
            tableTitle: string;
            thead: {
                col1: string;
                col2: string;
            };
            tbody: {
                col1: string;
                col2: string;
            }[];
        }[];
    };
  }

const CourseTable: React.FC<courseTableProps> = ({ courseTableProps }) => {
    return (
        <section className="px-8 py-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {courseTableProps.headerText}
            </h2>
            {courseTableProps.tables.map((table, index) => (
                <div className="overflow-x-auto mb-4">
                    <table className="w-full table-auto">
                        <thead>
                        <tr className="">
                            <th className="px-4 py-2 text-center">
                            <h2 className="font-bold">
                                {table.tableTitle}
                            </h2>
                            </th>
                        </tr>
                        </thead>
                    </table>
                    <table className="w-full table-auto">
                        <thead>
                        <tr className="bg-gray-800">
                            <th className="px-4 py-2 text-left">{table.thead.col1}</th>
                            <th className="px-4 py-2 text-left">{table.thead.col2}</th>
                        </tr>
                        </thead>
                        <tbody>
                            {table.tbody.map((tbody, index) => (
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">{tbody.col1}</td>
                                    <td className="px-4 py-2">{tbody.col2}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </section>
    )
}

export default CourseTable;
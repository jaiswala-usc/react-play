import React, {Component} from 'react';

class Table extends Component {
    render() {
        const {tabularData, removeData} = this.props;
        return(
            <table>
                {/* <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bob</td>
                        <td>Manager</td>
                    </tr>
                    <tr>
                        <td>Mohsen</td>
                        <td>Senior Dev</td>
                    </tr>
                    <tr>
                        <td>Wyatt</td>
                        <td>Senior Dev</td>
                    </tr>
                    <tr>
                        <td>Abhishek</td>
                        <td>Junior Dev</td>
                    </tr>
                </tbody> */}

                <TableHeader />
                <TableBody tabularData = {tabularData} removeData = {removeData} />

            </table>
        );
    }
}

export default Table;


const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.tabularData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick = {() => props.removeData(index)}>Delete</button></td>
            </tr>
        );
    });
    return(
        <tbody>
            {rows}
            {/* <tr>
                <td>Bob</td>
                <td>Manager</td>
            </tr>
            <tr>
                <td>Mohsen</td>
                <td>Senior Dev</td>
            </tr>
             <tr>
                <td>Wyatt</td>
                <td>Senior Dev</td>
             </tr>
            <tr>
                <td>Abhishek</td>
                <td>Junior Dev</td>
             </tr> */}
        </tbody>
    );
}
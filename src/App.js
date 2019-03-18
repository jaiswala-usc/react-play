import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    state = {
        tableDetails: [
            {
                'name': 'Bob',
                'job': 'Manager'
            },
            {
                'name': 'Mohsen',
                'job': 'Senior Dev'
            },
            {
                'name': 'Wyatt',
                'job': 'Senior Dev'
            },
            {
                'name': 'Abhishek',
                'job': 'Junior Dev'
            }
        ]
    };
    removeData = index => {
        const {tableDetails} = this.state;

        this.setState({
            tableDetails: tableDetails.filter((character,i) => {
                return i !== index;
            })
        });
    }
    render() {

        // const dynamictable = [
            // {
            //     'name': 'Bob',
            //     'job': 'Manager'
            // },
            // {
            //     'name': 'Mohsen',
            //     'job': 'Senior Dev'
            // },
            // {
            //     'name': 'Wyatt',
            //     'job': 'Senior Dev'
            // },
            // {
            //     'name': 'Abhishek',
            //     'job': 'Junior Dev'
            // }
        // ];

        const {tableDetails} = this.state;

        
        return (

            <div className="container">
                {/* <h1>Helloooooooo! React is here!</h1> */}
                <Table
                 tabularData = {tableDetails}
                 removeData = {this.removeData}
                 />
            </div>

        );
    }
}

export default App;
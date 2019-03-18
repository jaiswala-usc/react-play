import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {

        const dynamictable = [
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
        ];
        return (

            <div className="container">
                {/* <h1>Helloooooooo! React is here!</h1> */}
                <Table tabularData = {dynamictable} />
            </div>

        );
    }
}

export default App;
import DataMap from './components/DataMap';
import DataTable from './components/DataTable';
import DataGraph from './components/DataGraph';


function App() {

    return (<div className='flex flex-col'>
            <DataMap />
            <div className='max-w-lg'>
            <DataGraph />
            </div>
            <DataTable />
    </div>)
}

export default App
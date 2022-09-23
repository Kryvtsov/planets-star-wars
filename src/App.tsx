import useFetchPlanets from "./hooks/useFetchPlanets";
import Table from "./components/Table";

function App() {
    const ROWS_PER_PAGE = 10;
    const { data = [], loading } = useFetchPlanets();
    if (loading) {
        return (
            <div className="container">
                <div className="loader"/>
            </div>
        )
    }
    return (
        <main className="container">
            <div className="wrapper">
                <Table data={data} rowsPerPage={ROWS_PER_PAGE}/>
            </div>
        </main>
    );
}

export default App;
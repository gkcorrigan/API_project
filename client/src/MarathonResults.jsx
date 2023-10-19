import React, {useEffect, useState} from "react";

const MarathonResults = () => {
    const [results, setResults] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetch('http://localhost:5543/api/results');
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching marathon results', error);
        }
    };
    fetchData();
}, []);

return (
    <div>
    <h1>Marathon Results</h1>
    <ul>
        {results.map(results => {
            <li key={results.runnerID}>
                <p>Runner ID: {results.runnerID} </p>
                <p> First Name: {results.firstName} </p>
                <p> Last Name: {results.lastName} </p>
                <p> City: {results.city} </p>
                <p> State: {results.state} </p>
                <p> Gender: {results.gender} </p>
                <p> Time: {results.finishTime} </p>
            </li>
})}
        
    </ul>
    </div>
);
}

export default MarathonResults
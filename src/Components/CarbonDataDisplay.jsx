import React from 'react';
import './CarbonDataDisplay.css';

const CarbonDataDisplay = ({ data }) => {
    if (!data) return <p>Select a region to view data.</p>;

    const { from, to, intensity, generationmix } = data;

    return (
        <div className="carbon-data-display">
            <h2>Carbon Intensity Data</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Time From</th>
                        <td>{from}</td>
                    </tr>
                    <tr>
                        <th>Time To</th>
                        <td>{to}</td>
                    </tr>
                    <tr>
                        <th>Forecast</th>
                        <td>{intensity.forecast}</td>
                    </tr>
                    <tr>
                        <th>Intensity Index</th>
                        <td>{intensity.index}</td>
                    </tr>
                </tbody>
            </table>

            <h3>Generation Mix</h3>
            <table className="generation-mix-table">
                <thead>
                    <tr>
                        <th>Fuel</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {generationmix.map((fuel, index) => (
                        <tr key={index}>
                            <td>{fuel.fuel}</td>
                            <td>{fuel.perc}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarbonDataDisplay;

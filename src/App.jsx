import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import CarbonDataDisplay from './Components/CarbonDataDisplay';
import { fetchCarbonIntensityByRegion } from './api/api';
import './App.css';

const regions = [
    { id: 1, name: "North Scotland" },
    { id: 2, name: "South Scotland" },
    { id: 3, name: "North West England" },
    { id: 4, name: "North East England" },
    { id: 5, name: "Yorkshire" },
    { id: 6, name: "North Wales" },
    { id: 7, name: "South Wales" },
    { id: 8, name: "West Midlands" },
    { id: 9, name: "East Midlands" },
    { id: 10, name: "East England" },
    { id: 11, name: "South West England" },
    { id: 12, name: "South England" },
    { id: 13, name: "London" },
    { id: 14, name: "South East England" },
    { id: 15, name: "England" },
    { id: 16, name: "Scotland" },
    { id: 17, name: "Wales" },
];

const App = () => {
    const [selectedRegion, setSelectedRegion] = useState('');
    const [carbonData, setCarbonData] = useState(null);

    const handleRegionChange = async (event) => {
        const regionId = event.target.value;
        setSelectedRegion(regionId);

        if (regionId) {
            const response = await fetchCarbonIntensityByRegion(regionId);
            const regionData = response.data[0].data[0];
            setCarbonData(regionData);
        } else {
            setCarbonData(null);
        }
    };

    return (
        <div className="app">
            <Header />
            <div className="content">
                <label htmlFor="region-select">Select Region:</label>
                <select
                    id="region-select"
                    value={selectedRegion}
                    onChange={handleRegionChange}
                >
                    <option value="">-- Select a Region --</option>
                    {regions.map(region => (
                        <option key={region.id} value={region.id}>
                            {region.name}
                        </option>
                    ))}
                </select>
                <CarbonDataDisplay data={carbonData} />
            </div>
        </div>
    );
};

export default App;

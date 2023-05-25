import React, {useState, useEffect} from 'react';
import {Chart} from 'primereact/chart';

export default function Wheel() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Does', 'Not', 'Spin', 'Yet'],
            datasets: [
                {
                    data: [300, 50, 100, 150],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                        documentStyle.getPropertyValue('--purple-400'),
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '33%',
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full sm:w-12rem md:w-30rem"/>
    )
}
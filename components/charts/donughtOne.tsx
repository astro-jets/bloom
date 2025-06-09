"use client"
import Chart from 'react-apexcharts'

export default function DonutOne() {

    const data = {
        options: {},
        series: [92, 8],
        labels: ['A', 'B']
    }

    return (
        <div className="donut" >
            <Chart options={data.options} series={data.series} type="donut" width="180" />
        </div>
    );
}
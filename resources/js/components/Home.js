import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import PostService from "../service/postService";
import Static from "../static/Static";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Home(props) {
    const [category, setCategory] = useState([])
    const [data, setData] = useState([])
    
    const getDashboardPost = async () => {
        const post = await PostService.dashboard({
            token: props.token
        })
        const response = post.data.data
        for(var i = 0;i < post.data.data.length;i++) {
            setCategory(old => [...old, response[i].category])
            setData(old => [...old, response[i].count])
        }
    }

    useEffect(() => {
        getDashboardPost()
    }, [])

    return (
        <div className="card">
            <div className="card-header">
                Home
            </div>
            <div className="card-body">
                <h5 className="card-title">Dashboard Example</h5>
                <div className="row">
                    <div className="col-6">
                        <Pie data={{
                            labels: category,
                            datasets: [
                                {
                                    label: '# of values',
                                    data: data,
                                    backgroundColor: [
                                        'rgba(43, 147, 225, 0.5)',
                                        'rgba(213, 243, 53, 0.5)',
                                        'rgba(243, 90, 53, 0.5)'
                                    ]
                                }
                            ]
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Data from "../data.json"
import ChartItem from "./ChartItem"

export default function Main() {
    const [data, setData] = useState(Data)


    useEffect(() => {
        setData(data.map(el => {
            return {
                id: nanoid(),
                amount: el.amount,
                day: el.day,
                active: false
            }
        }))
    }, [])

    function handleActive(id) {
        setData(old => old.map(el => {
            return el.id === id ? 
                {
                    ...el,
                    active: !el.active
                }
                :
                    el
        }))
    }

    const charts = data.map(item => {
        return (
            <ChartItem
                key={item.id}
                id={item.id}
                amount={item.amount}
                day={item.day}
                handleClick={() => handleActive(item.id)}
                active={item.active}
            />
        )
    })

    return (
        <main className="main">
            <h1 className="main-heading">Spending - Last 7 days</h1>
            <section className="chart">
                {charts}
            </section>
            <hr />
            <section className="bottom-section flex-js-btween">
                <div className="left-section">
                    Total this month<span className="bold-text bold bold-btm">$478.33</span>
                </div>
                <div className="right-btm-section">
                    <p><span className="bold text-btm">+2.4%</span>from last month</p>
                </div>
            </section>
        </main>
    )
}
//  
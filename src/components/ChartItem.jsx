

export default function ChartItem(props) {

    const styles = {
        height: `${props.amount * 3}px`, // So it does not get too long  
        backgroundColor:
            props.amount > 50 && props.active ? "hsl(186, 34%, 75%)" :
            props.amount > 50 ? "hsl(186, 34%, 60%)" :
            props.active ? "hsl(10, 79%, 80%)" : 
                "hsl(10, 79%, 65%)"
    }

    return (
        <div className="item">
            <div onClick={props.handleClick} style={styles} className="chart-dom">
                {props.active && <div className="active">{`$${props.amount}`}</div>}
            </div>
            <p className="day-name">{props.day}</p>
        </div>
    )
}

import styles from '../styles/adminstyle.module.css'

export function AnalyticsCards (props) {
    return (
        <>
        <div className={styles.AnalyticsCardsItem}>
            <h4>{props.title}</h4>

            <div className={styles.AnalyticCardAccent}> 
                <h4>{props.amount}</h4>
            </div>
        </div>
        </>
    )
}

export function RecentTask (props) {
    return (
        <>
        <div className={styles.RecentTaskItem}>
            <div className={styles.RecentTaskAccent}><h1></h1></div>
            <span>{props.text}</span>
            {props.sla}
        </div>
        </>
    )
}

export function MonitorCard () {
    return (
        <>
        <div className={styles.MonitorCardItem}>
            <h3>
                I am Monitor Card !!!
            </h3>
        </div>
        </>
    )
}
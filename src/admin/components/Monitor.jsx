import styles from '../styles/adminstyle.module.css'

function MonitorCard(props) {
    return (
        <div className={styles.MonitorCardContainer}>
            <h2>{props.title}</h2>
            <hr/>
            {props.component}
        </div>
    )
}

export default MonitorCard
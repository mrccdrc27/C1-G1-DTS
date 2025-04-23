import styles from './styles/adminstyle.module.css'
import layout from './styles/layout.module.css'
import { AnalyticsCards, RecentTask, MonitorCard } from "./components/DashboardComponents";

function AdminDashboard() {
    return (
        <>
        <div className={styles.main}>

            <div className={styles.section1}>
                <span>admin / user</span>
                <h1>Overview</h1>
                <hr/>
            </div>

            <div className={styles.section2}>
                <h2>Quick Action</h2>
                <div className={styles.AnalyticsCardsContainer}>
                    {/* to rename as ActionCards */}
                    <AnalyticsCards
                    title="Assign Ticket"/>
                    <AnalyticsCards
                    title="Resolve Issues"/>
                    <AnalyticsCards
                    title="Manage Users"/>
                </div>
            </div>

            <div className={styles.section3}>
                <h2>For Review</h2>
                <div>
                    <RecentTask text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, accusamus.'/>
                    <RecentTask text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, accusamus.'/>
                    <RecentTask text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perferendis.'/>
                    <RecentTask text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, accusamus.'/>
                    <RecentTask text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, accusamus.'/>
                    <RecentTask text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, accusamus.'/>
                </div>
            </div>

            <div className={styles.section4}>
                <h2>Monitor</h2>
                <div className={styles.MonitorCardContainer}>
                    <MonitorCard/>
                    <MonitorCard/>
                    <MonitorCard/>
                    <MonitorCard/>
                    <MonitorCard/>
                    <MonitorCard/>
                    <MonitorCard/>
                    <MonitorCard/>
                </div> 
            </div>

        </div>
 
        </>
    );
}

export default AdminDashboard
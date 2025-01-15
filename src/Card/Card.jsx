import cardPic from "../assets/default-profile-photo.jpg"
import styles from "./Card.module.css"
function Card() {

    return(
        <>
            <div className={styles.card}>
                
                <img src={cardPic} className={styles.cardpic}></img>
                <h2 className={styles.cardtitle}>Card Title</h2>
                <p className={styles.cardcontent}>Card info and main section.</p>
            </div>
        </>
    )
}
export default Card
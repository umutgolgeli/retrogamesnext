import styles from "../../styles/HomePage.module.css";
import Link from "next/link";

export default function Pagination({size,categories}){
    const groupedData = {};

    console.log("##CATEGORY##", categories); // "undefined

    const myButtons = size/10;
    const  numberOfButtons = Math.ceil(myButtons)


    for (let i = 1; i <= numberOfButtons; i++) {
        groupedData[i-1] = i;
    }


    const pagesData = Object.values(groupedData);
    return(
        <div className={styles.buttonDiv}>
                    <span>
                        <Link className={styles.numberButtons} href="" >&laquo;Previous</Link>
                        {pagesData?.map((item) => (
                            <Link className={styles.numberButtons} key={item} href="/categories/" as = {`/pagination/${item}`}>
                                {item}</Link>))}
                        <Link className={styles.numberButtons} href="">Next&raquo;</Link>
                    </span>
        </div>
    )
}
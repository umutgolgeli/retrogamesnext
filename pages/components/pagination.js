import styles from "../../styles/HomePage.module.css";
import Link from "next/link";

export default function Pagination({categories,size}){


    const type = categories?categories[0]:"all" ;

    const numberArray = [];
    for (let i = 1; i <= size; i++) {
        numberArray.push(i);
    }

    return(
        <div className={styles.buttonDiv}>
                    <span>
                        <Link className={styles.numberButtons} href="" >&laquo;Previous</Link>
                        {numberArray?.map((item) => (
                            <Link className={styles.numberButtons}
                                  key={item}
                                  href={`/categories/${type}/${item}`}>
                                {item}</Link>))}
                        <Link className={styles.numberButtons} href="">Next&raquo;</Link>
                    </span>
        </div>
    )
}
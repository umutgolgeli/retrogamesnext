import styles from "../../styles/HomePage.module.css";
import Link from "next/link";

export default function Pagination({categories,size}){

    const pageNum = categories ? categories[1]: 1;
    const type = categories?categories[0]:"all" ;

    const numberArray = [];
    for (let i = 1; i <= size; i++) {
        numberArray.push(i);
    }

    return(
        <div className={styles.buttonDiv}>
                    <span>
                        <Link className={styles.numberButtons} href={`/categories/${type}/${pageNum > 1 ? Number(pageNum)-1 : 1}.html`} >&laquo;Previous</Link>
                        {numberArray?.map((item) => (
                            <Link className={styles.numberButtons}
                                  key={item}
                                  href={`/categories/${type}/${item}.html`}>
                                {item}</Link>)
                        )}
                        <Link className={styles.numberButtons}  href={`/categories/${type}/${Number(pageNum)+1 > size ? size :Number(pageNum)+1}.html`}>Next&raquo;</Link>
                    </span>
        </div>
    )
}
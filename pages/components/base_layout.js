import Link from "next/link";
import styles from "../../styles/HomePage.module.css";


export default function BaseLayout({children}){
    const buttons = [
        {
            name: "all",
            value: "All",
        },
        {
            name: "action",
            value: "Action",
        },
        {
            name: "adventure",
            value: "Adventure",
        },
        {
            name: "arcade",
            value: "Arcade",
        },
        {
            name: "board",
            value: "Board",
        },
        {
            name: "miscellaneous",
            value: "Miscellaneous",
        },
        {
            name: "platform Game",
            value: "Platform",
        },
        {
            name: "puzzle",
            value: "Puzzle",
        },
        {
            name: "race",
            value: "Race",
        },
        {
            name: "simulation",
            value: "Simulation",
        },
        {
            name: "space",
            value: "Space",
        },
        {
            name: "sport",
            value: "Sport",
        },
        {
            name: "strategy",
            value: "Strategy",
        },
        {
            name: "tactical",
            value: "Tactical",
        }
    ];


    const pages = [{
        name: "1",
    },{
        name: "2",
    },{
        name: "3",
    },{
        name: "4",
    },{
        name: "5",
    },{
        name: "6",
    },{
        name: "7",
    },{
        name: "8",
    }]

    return (
        <div>
            <table className="upper">
                <tbody>
                <tr>
                    <td>
                        <img src="/bitsody_logo.png" alt="Logo" />
                    </td>
                    <td className="title">Retro Games</td>
                </tr>
                </tbody>
            </table>
            <table className="lower">
                <tbody>
                <tr>
                    <td className="left-column">
                        <table className="category-table">
                            <tbody>
                            <tr>
                                <th>Category</th>
                            </tr>
                            {buttons?.map((item) => (
                                <tr key={item.name}>
                                    <td className="td-button">
                                        <Link className="link" href="/categories/[category]" as = {`/categories/${item.name}`}>
                                            {item.value}
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </td>
                    <td>
                        {children}
                        <div className={styles.buttonDiv}>
                <span>
                    <Link className={styles.numberButtons} href="" >&laquo;Previous</Link>
                    {pages?.map((item) => (
                        <Link className={styles.numberButtons} key={item.name} href="/pagination/[page]" as = {`/pagination/${item.name}`}>
                            {item.name}</Link>))}
                    <Link className={styles.numberButtons} href="">Next&raquo;</Link>
                </span>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

import Link from "next/link";



export default function BaseLayout(props){

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
            name: "Platform game",
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

    const children = props.children;
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
                                        <Link className="link" href="/categories/[...category]" as = {`/categories/${item.value.toLocaleLowerCase()}/1.html  `}>
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
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
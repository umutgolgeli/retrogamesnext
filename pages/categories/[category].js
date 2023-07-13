import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import unfetch from "isomorphic-unfetch";

const HomePage = ({params}) => {
    // const [data, set_data] = useState([]);
    // const [filtredCategory, setFiltredCategory] = useState(null);
    //
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
    //

    //
    // useEffect(() => {
    //     fetchData();
    // }, []);
    //
    // async function fetchData() {
    //     try {
    //         const response = await fetch("http://localhost:3000/api/hello");
    //         const data = await response.json();
    //         set_data(data);
    //         setFiltredCategory(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    //
    // function filterCategory(categoryType) {
    //     if (categoryType === "all") {
    //         return data;
    //     }
    //     return data.filter((item) => item.partitionKey === categoryType);
    // }
    //
    // function handleCategory(e) {
    //     let categoryType = e.target.value;
    //     let filteredData = filterCategory(categoryType);
    //     setFiltredCategory(filteredData);
    // }

    return (
        <>
            <meta charSet="UTF-8" />
            <title>Retro Games</title>
            <link rel="stylesheet" href="/styles/style.css" />
            <table className="navbar">
                <tbody>
                <tr></tr>
                </tbody>
            </table>
            <table className="upper">
                <tbody>
                <tr>
                    <td>
                        <img src="../../public/bitsody-logo.png" alt="Logo" />
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
                            {buttons.map((item) => (
                                <tr key={item.name}>
                                    <td className="td-button">
                                        <button className="my-button" value={item.value} >
                                            {item.value}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </td>
                    <td className="right-column">
                        <table className="games-table">
                            <tbody>
                            <tr>
                                <th>Images</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Release Date</th>
                                <th>Link</th>
                            </tr>

                            {/*{games &&*/}
                            {/*    games.map((item) => (*/}
                            {/*        <tr key={item.rowKey}>*/}
                            {/*            <td className="game-picture">*/}
                            {/*                <img src={item.Image1} alt={item.rowKey} />*/}
                            {/*            </td>*/}
                            {/*            <td>{item.partitionKey}</td>*/}
                            {/*            <td>{item.rowKey}</td>*/}
                            {/*            <td>{item.ReleaseDate}</td>*/}
                            {/*            <td className="download-link">*/}
                            {/*                <a href={item.SetupFile} className="download-button">*/}
                            {/*                    Download*/}
                            {/*                </a>*/}
                            {/*            </td>*/}
                            {/*        </tr>*/}
                            {/*    ))}*/}

                            {params &&
                                params.map((item) => (
                                    <tr key={item.rowKey}>
                                        <td className="game-picture">
                                            <img src={item.Image1} alt={item.rowKey} />
                                        </td>
                                        <td>{item.partitionKey}</td>
                                        <td>{item.rowKey}</td>
                                        <td>{item.ReleaseDate}</td>
                                        <td className="download-link">
                                            <a href={item.SetupFile} className="download-button">
                                                Download
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
};


export async function getStaticPaths() {
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

    const paths = buttons.map(item => {
        return {params: { category: `${item.name}` }
    }});
    console.log("$$$$$$$$$$$$$$")
    console.log(paths);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {

    console.log("###########")
    console.log(params)

    const data = await unfetch("http://localhost:3000/api/hello");
    const games = await data.json();

    const filteredData = games.filter((item) => item.partitionKey === params.category);

    console.log("%%%%%%%%%%%%%");
    console.log(filteredData);


    return {
        props: {
            filteredData,
        },
    };


}


export default HomePage;
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";

const HomePage = ({games}) => {

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
                                        <Link className= "link" href="/categories/[category]" as = {`/categories/${item.name}`}>
                                            {item.value}
                                        </Link>
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

                            {games &&
                                games.map((item) => (
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
    );
};



export async function getStaticProps() {
    const data = await unfetch("http://localhost:3000/api/hello");
    const games = await data.json();
    return {
        props: {
            games,
        }
    }
}
export default HomePage;

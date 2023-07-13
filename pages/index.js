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

    return (
        <>
            <meta charSet="UTF-8" />


                    <link rel="icon" href="/favicon.ico" />

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
                        <img src="/bitsody-logo.png" alt="Logo" />
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
                                        <Link className="link" href="/categories/[category]" as = {`/categories/${item.name}`}>
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
        </>
    );
};



export async function getStaticProps() {
  try{  const data = await unfetch("http://localhost:3000/api/hello");
    const games = await data.json();
    return {
        props: {
            games,
        }
    }
}   catch (error)
{
  console.log(error)
}
}

export default HomePage;

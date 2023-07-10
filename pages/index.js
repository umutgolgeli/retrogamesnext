import {useEffect, useState} from "react";
import {log} from "next/dist/server/typescript/utils";

const HomePage = () => {
    // const [data, set_data] = useState("");
    // async function get_entities(){
    //     return fetch("http://localhost:3000/api/hello")
    //         .then(res => res.json())
    //         .then(data => set_data(data));
    //
    // }
    // useEffect(()=> {
    //    get_entities().then();
    // }, [])
    //
    //     useEffect(() => {
    //         fetch("http://localhost:3000/api/hello")
    //                  .then(res => res.json())
    //                 .then(json => console.log(json))
    //     }, [])

    //const [data, set_data] = useState([]);

    // const [data, setData] = useState();
    //
    //
    // useEffect(() => {
    //     fetch("http://localhost:3000/api/hello")
    //         .then(response =>response.json())
    //         .then(data => console.log(data))
    //         .then(data => setData(data))
    //         .catch(error => console.error(error));
    // }, []);
    const [data, set_data] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/hello")
            .then(response => response.json())
            .then(data => {
                set_data(data);
                 // console.log(data);
            })
            .catch(error => console.error(error));
    }, []);


    console.log("###mydata###", data);

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
                        <img src="bitsody-logo.png" alt="Logo" />
                    </td>
                    <td className="title">Retro Games</td>
                </tr>
                </tbody>
            </table>
            <ul>
                {data.map((item) => (
                    <li key={item.partitionKey}>Items : {item.partitionKey}</li>
                ))}
            </ul>
            <table className="lower">
                <tbody>
                <tr>
                    <td>

                        <table className="category-table">
                            <tbody>
                            <tr>
                                <th>Category</th>
                            </tr>
                            <tr>
                                <td>Adventure</td>
                            </tr>
                            <tr>
                                <td>Shooter</td>
                            </tr>
                            <tr>
                                <td>Fighting</td>
                            </tr>
                            <tr>
                                <td>Puzzle</td>
                            </tr>
                            <tr>
                                <td>Racing</td>
                            </tr>
                            <tr>
                                <td>Sports</td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table className="games-table">


                            <tbody>
                            <tr>
                                <th>Games</th>
                                <th>Name</th>
                                <th>Release Date</th>
                                <th>Rate</th>
                                <th>Link</th>
                            </tr>

                            <tr>
                                <td className="game-picture">
                                    <img src="game1.jpeg" alt="Game 1" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <img src="game2.jpeg" alt="Game 2" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <img src="game3.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <img src="game4.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <img src="game5.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr><tr>
                                <td className="game-picture">
                                    <img src="game6.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <img src="game7.jpeg" />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
};

// export async function getEntities(){
//     const entities= [];
//     const res = await fetch('/api/hello')
//         .then(res => res.text())
//         .then(data => entities.push(data));
//
//     return entities;
// }

export default HomePage;

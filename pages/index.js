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
                                <th>Images</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Release Date</th>
                                <th>Link</th>
                            </tr>


                            {data.map((item) => (
                                <tr key={item.partitionKey}>

                                    <td className="game-picture">
                                        <img src={item.Image1}  />
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

export default HomePage;

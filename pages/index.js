import { useEffect, useState } from "react";

const HomePage = () => {
    const [data, set_data] = useState([]);
    const [filtredCategory, setFiltredCategory] = useState(null);

    const buttons = [
        {
            name: "All",
            value: "All"
        },
        {
            name: "Action",
            value: "Action"
        },
        {
            name: "Adventure",
            value: "Adventure"
        },
        {
            name: "Arcade",
            value: "Arcade"
        },
        {
            name: "Board",
            value: "Board"
        },
        {
            name: "Miscellaneous",
            value: "Miscellaneous"
        },
        {
            name: "Platform Game",
            value: "Platform"
        },
        {
            name: "Puzzle",
            value: "Puzzle"
        },
        {
            name: "Race",
            value: "Race"
        },
        {
            name: "Simulation",
            value: "Simulation"
        },
        {
            name: "Space",
            value: "Space"
        },
        {
            name: "Sport",
            value: "Sport"
        },
        {
            name: "Strategy",
            value: "Strategy"
        },
        {
            name: "Tactical",
            value: "Tactical"
        }
    ];

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:3000/api/hello");
            const data = await response.json();
            set_data(data);
            setFiltredCategory(data);
        } catch (error) {
            console.error(error);
        }
    }

    function filterCategory(categoryType) {
        if (categoryType === "all") {
            return data;
        } else {
            const filteredData = data.filter(
                (item) => item.partitionKey === categoryType
            );
            return filteredData;
        }
    }

    function handleCategory(e) {
        let categoryType = e.target.value;
        let filteredData = filterCategory(categoryType);
        setFiltredCategory(filteredData);
    }

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
                            {buttons.map((item) => (
                                <tr>
                                    <td>
                                        <button
                                            key={item.value}
                                            value={item.value}
                                            onClick={handleCategory}
                                        >
                                            {item.name}
                                        </button>
                                    </td>
                                </tr>
                            ))}
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
                            {filtredCategory &&
                                filtredCategory.map((item) => (
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

export default HomePage;

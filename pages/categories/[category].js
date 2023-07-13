
import unfetch from "isomorphic-unfetch";
import BaseLayout from "../components/base_layout";

const FilteredPage = ({filteredData}) => {

    return (
        <BaseLayout>
                <table className="games-table">
                    <tbody>
                    <tr>
                        <th>Images</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Release Date</th>
                        <th>Link</th>
                    </tr>

                    {filteredData &&
                        filteredData.map((item) => (
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
        </BaseLayout>
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
        return {params:
                {category: `${item.name}`}
        }
    });

    return {
        paths,
        fallback: false,
    };
}


export async function getStaticProps({ params }) {
    const {category} = params;

    const data = await unfetch("http://localhost:3000/api/hello");
    const games = await data.json();

    const filteredData =  category === "all" ? games : games.filter((item) => item.partitionKey.toLocaleLowerCase() === category);

    return {
        props: {
            params: {category},
            filteredData,
        },
    };
}


export default FilteredPage;
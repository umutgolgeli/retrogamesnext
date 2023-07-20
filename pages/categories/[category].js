
import unfetch from "isomorphic-unfetch";
import BaseLayout from "../components/base_layout";
import {AzureNamedKeyCredential, TableClient} from "@azure/data-tables";

export const config = {
    unstable_runtimeJS: false
};


const FilteredPage = ({filteredData}) => {


    return (
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
                                    <a href={item.Image1} target={"_blank"}>
                                        <img src={item.Image1} alt={item.rowKey} />
                                    </a>
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

const account = "retrogamesstorage";
const accountKey = "IQO22MPzKrK8OgfK/L7Z4kFxl3LzoVQxcuScqZ+bTw0ALrFLD/uFP35ftCGR/+LEHIURjFMot8iQ+AStQfROJQ==";
const tableName = "retrogames";


const credential = new AzureNamedKeyCredential(account,accountKey);
const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);
export async function getTable() {
    const entities = [];
    let entitiesIter = client.listEntities();
    let i = 1;
    for await (const entity of entitiesIter) {
        // const item = `Entity${i} - PartitionKey: ${entity.partitionKey} RowKey: ${entity.rowKey} SetupFile: ${entity.SetupFile} Image:${entity.Image}`;
        entities.push(entity);
        i++;
    }
    return entities;
}






export async function getStaticProps({ params }) {
    const {category} = params;

    const games = await getTable();

    const filteredData =  category === "all" ? games : games.filter((item) => item.partitionKey.toLocaleLowerCase() === category);

    return {
        props: {
            params: {category},
            filteredData,
        },
    };
}
export default FilteredPage;

import unfetch from "isomorphic-unfetch";
import BaseLayout from "../components/base_layout";
import {AzureNamedKeyCredential, TableClient} from "@azure/data-tables";
import styles from "../../styles/HomePage.module.css";
import Link from "next/link";
import Pagination from "../components/pagination";

export const config = {
    unstable_runtimeJS: false
};
const FilteredPage = ({params,filteredData,size}) => {

    const pageNum = params.category[1];

    return (
        <>
                <table className="games-table">
                    <tbody>
                    <tr>
                        <th>Images</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Release Date</th>
                        <th>Link</th>
                    </tr>

                    {filteredData&&
                        filteredData.slice((pageNum-1)*10,10*pageNum).map((item) => (
                            <tr key={item.rowKey}>
                                <td className="game-picture">
                                        <a  className="photoLink" href={item.Image1} target={"_blank"}>

                                        <img src={item.Image1} alt={item.rowKey} />
                                    </a>
                                </td>
                                <td>{item.partitionKey}</td>

                                <td >{item.rowKey}</td>
                                <td>{item.ReleaseDate}</td>
                                <td className="download-link">
                                    <div className={styles.downloadButtonContainer}>
                                        <a className={styles.downloadButton} href={item.SetupFile} >
                                            Download
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            <div className={styles.buttonDiv}>
                    <Pagination  categories={params.category} size={size}/>
            </div>
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
            name: "platform",
            value: "Platform Game",
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
    const account = "retrogamesstorage";
    const accountKey = "IQO22MPzKrK8OgfK/L7Z4kFxl3LzoVQxcuScqZ+bTw0ALrFLD/uFP35ftCGR/+LEHIURjFMot8iQ+AStQfROJQ==";
    const tableName = "retrogames";
    const credential = new AzureNamedKeyCredential(account,accountKey);
    const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);
    const entities = [];
    let entitiesIter = client.listEntities();
    for await (const entity of entitiesIter) {
        entities.push(entity);
    }
    const sizeOfTable = entities.length;

    const categoryCounts = {};

    categoryCounts["all"] = sizeOfTable;

    for (const entity of entities) {
        const partitionKey = entity.partitionKey;
        for (const button of buttons) {
            if (button.value === partitionKey) {
                if (categoryCounts[partitionKey]) {
                    categoryCounts[partitionKey]++;
                } else {
                    categoryCounts[partitionKey] = 1;
                }
                break;
            }
        }
    }
    const paths = [];
    for (const button of buttons) {
        const categoryName = button.name;
        let categoryCount;
        let pageCount;
        if (categoryName === "all") {
             categoryCount = categoryCounts[button.name] || 0;
             pageCount = Math.ceil(categoryCount / 10);
        }
        else{
             categoryCount = categoryCounts[button.value] || 0;
             pageCount = Math.ceil(categoryCount / 10);
        }

        for (let i = 1; i <= pageCount; i++) {
            paths.push({
                params: {
                    category: [categoryName, i.toString()],
                },
            });
        }
    }

    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const {category} = params;
    const account = "retrogamesstorage";
    const accountKey = "IQO22MPzKrK8OgfK/L7Z4kFxl3LzoVQxcuScqZ+bTw0ALrFLD/uFP35ftCGR/+LEHIURjFMot8iQ+AStQfROJQ==";
    const tableName = "retrogames";
    const credential = new AzureNamedKeyCredential(account,accountKey);
    const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);
    const entities = [];
    let entitiesIter = client.listEntities();
    for await (const entity of entitiesIter) {
        entities.push(entity);
    }
    const filteredData =  category[0] === "all" ? entities : entities.filter((item) => item.partitionKey.toLocaleLowerCase() === category[0]);
    const size = Math.ceil(filteredData.length/10);
    return {
        props: {
            params: {category},
            filteredData,
            size,
        },
    };
}
export default FilteredPage;
import unfetch from "isomorphic-unfetch";
import {AzureNamedKeyCredential, TableClient} from "@azure/data-tables";

export const config = {
    unstable_runtimeJS: false
};

const Pages = ({filteredData}) => {

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
                            <a  href={item.Image1} target={"_blank"}>
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
    const pages = [
        {
        name: "1",
    },
        {
        name: "2",
    },{
        name: "3",
    },{
        name: "4",
    },{
        name: "5",
    },{
        name: "6",
    },{
        name: "7",
    },{
        name: "8",
    }]

    const paths = pages.map(item => {
        return {params:
                {page: `${item.name}`}
        }
    });

    return {
        paths,
        fallback: false,
    };
}
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

    const account = "retrogamesstorage";
    const accountKey = "IQO22MPzKrK8OgfK/L7Z4kFxl3LzoVQxcuScqZ+bTw0ALrFLD/uFP35ftCGR/+LEHIURjFMot8iQ+AStQfROJQ==";
    const tableName = "retrogames";

    const credential = new AzureNamedKeyCredential(account,accountKey);
    const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);

    const pageSize = 10;
    const page = 1;

    const skip = (page - 1) * pageSize;
    const top = pageSize;

    const entities = [];
    let entitiesIter = client.listEntities({ queryOptions: { filter: undefined, top, skip } });
    for await (const entity of entitiesIter) {
        entities.push(entity);
    }



    return {
        props: {
            params: { page },
            entities,
        },
    };
}

export default Pages;
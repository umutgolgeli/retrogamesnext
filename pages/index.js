import unfetch from "isomorphic-unfetch";
import styles from "../styles/HomePage.module.css";
import {AzureNamedKeyCredential, TableClient} from "@azure/data-tables";

export const config = {
    unstable_runtimeJS: false
};


function HomePage({games}) {
    return (
        <div>
            <table className={styles.homeContainer}>
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
                                <td >
                                    <a className={styles.myButton} href={item.Image1} target={"_blank"}>
                                        <img className={styles.myImg} src={item.Image1} alt={item.rowKey} />
                                    </a>
                                </td>
                                <td >{item.partitionKey}</td>
                                <td >{item.rowKey}</td>
                                <td >{item.ReleaseDate}</td>
                                <td >
                                    <a className={styles.downloadButton} href={item.SetupFile} >
                                        Download
                                    </a>
                                </td>
                            </tr>
                        ))}

                </tbody>

            </table>
        </div>
    );
}
// const account = "retrogamesstorage";
// const accountKey = "IQO22MPzKrK8OgfK/L7Z4kFxl3LzoVQxcuScqZ+bTw0ALrFLD/uFP35ftCGR/+LEHIURjFMot8iQ+AStQfROJQ==";
// const tableName = "retrogames";
//
//
// const credential = new AzureNamedKeyCredential(account,accountKey);
// const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);
//
//
// export async function getTable() {
//     const entities = [];
//     let entitiesIter = client.listEntities();
//     let i = 1;
//     for await (const entity of entitiesIter) {
//         // const item = `Entity${i} - PartitionKey: ${entity.partitionKey} RowKey: ${entity.rowKey} SetupFile: ${entity.SetupFile} Image:${entity.Image}`;
//         entities.push(entity);
//         i++;
//     }
//
//     return entities;
// }


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


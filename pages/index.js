import styles from "../styles/HomePage.module.css";
import {AzureNamedKeyCredential, odata, TableClient} from "@azure/data-tables";
import Pagination from "./components/pagination";
import url from "url";


export const config = {
    unstable_runtimeJS: false
};
function HomePage({games,size}) {
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
                            games.slice(0,10).map((item) => (
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
            <Pagination size={size} />
        </div>
    );
}
export async function getStaticProps() {
    try{
        const account = "retrogamesstorage";
        const accountKey = "IQO22MPzKrK8OgfK/L7Z4kFxl3LzoVQxcuScqZ+bTw0ALrFLD/uFP35ftCGR/+LEHIURjFMot8iQ+AStQfROJQ==";
        const tableName = "retrogames";
        const credential = new AzureNamedKeyCredential(account,accountKey);
        const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);
        const entities = client.listEntities();
        let topEntities = [];
        const iterator = entities.byPage();

        for await (const page of iterator) {
            topEntities = page;
            break;
        }

        const games = topEntities;

        const size = Math.ceil(games.length/10);

        return {
            props: {
                games,
                size,
            }
        }
    }   catch (error)
    {
        console.log(error)
    }
}

export default HomePage;


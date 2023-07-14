import unfetch from "isomorphic-unfetch";
import styles from "../styles/HomePage.module.css";

function HomePage({games}) {
    return (
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
                                <img src={item.Image1} alt={item.rowKey} />
                            </td>
                            <td >{item.partitionKey}</td>
                            <td >{item.rowKey}</td>
                            <td >{item.ReleaseDate}</td>
                            <td >
                                <a href={item.SetupFile} >
                                    Download
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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


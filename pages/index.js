import unfetch from "isomorphic-unfetch";
import BaseLayout from "./components/base_layout";
function HomePage({games}) {

    return (
        <BaseLayout>
            <table>
                {games &&
                    games.map((item) => (
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
            </table>
        </BaseLayout>
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


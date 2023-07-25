import BaseLayout from "../components/base_layout";
import unfetch from "isomorphic-unfetch";

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
    const pages = [{
        name: "1",
    },{
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

export async function getStaticProps({ params }) {
    const { page } = params;

    const data = await unfetch("http://localhost:3000/api/hello");
    const games = await data.json();
    const size = games.length;

    const groupedData = {};

    for (let i = 1; i <= 8; i++) {
        groupedData[i] = [];
    }

    games.forEach((game, index) => {
        const categoryIndex = index % 8 + 1;
        if (groupedData[categoryIndex].length < 11) {
            groupedData[categoryIndex].push(game);
        }
    });
    const filteredData = groupedData[page];

    return {
        props: {
            params: { page },
            filteredData,
        },
    };
}

export default Pages;
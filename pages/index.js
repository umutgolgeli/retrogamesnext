import Image from 'next/image'
import bitsody from '/public/bitsody_logo.png'
import game1 from '/public/game1.jpeg'
import game2 from '/public/game2.jpeg'
import game3 from '/public/game3.jpeg'
import game4 from '/public/game4.jpeg'
import game5 from '/public/game5.jpeg'
import game6 from '/public/game6.jpeg'
import game7 from '/public/game7.jpeg'



export default function Home() {
  return (
        <>
            <meta charSet="UTF-8" />
            <title>Title</title>
            <link rel="stylesheet" href="/style.css" />
            <table className="navbar">
                <tbody>
                <tr></tr>
                </tbody>
            </table>
            <table className="upper">
                <tbody>
                <tr>
                    <td>
                        <Image src={bitsody} />
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
                            <tr>
                                <td>Adventure</td>
                            </tr>
                            <tr>
                                <td>Shooter</td>
                            </tr>
                            <tr>
                                <td>Fighting</td>
                            </tr>
                            <tr>
                                <td>Puzzle</td>
                            </tr>
                            <tr>
                                <td>Racing</td>
                            </tr>
                            <tr>
                                <td>Sports</td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table className="games-table">
                            <tbody>
                            <tr>
                                <th>Games</th>
                                <th>Name</th>
                                <th>Release Date</th>
                                <th>Rate</th>
                                <th>Link</th>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <Image src={game1} />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <Image src={game2} />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <Image src={game3} />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <Image src={game4} />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <Image src={game5} />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <Image src={game6} />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="game-picture">
                                    <Image src={game7} />
                                </td>
                                <td>Valorant</td>
                                <td>20.06.2020</td>
                                <td>4.5</td>
                                <td className="download-link">
                                    <a href="your-file-path" className="download-button">
                                        Download
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </>

        )
}

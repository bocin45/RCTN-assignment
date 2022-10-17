import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";

function App() {

    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('https://api.currencyfreaks.com/latest?apikey=4a08e8b39bd44b778d5ee51c95305a6b&format=json').then(res => {
            setData(res.data);
        });

    }, [])
    console.log(data)

    return (
        <div className="App">
            <table>
                <tr>
                    <th>Currency</th>
                    <th>We Buy</th>
                    <th>Exchange Rate</th>
                    <th>We Sell</th>
                </tr>
                <tr>
                    <td>CAD</td>
                    {
                        data.rates ?
                            <>
                                <th>{(5 / 100 * Number(data.rates.CAD)) + Number(data.rates.CAD)}</th>
                                <th>{data.rates.CAD}</th>
                                <th>{Number(data.rates.CAD) - (5 / 100 * Number(data.rates.CAD)) }</th>
                            </> :
                            <>
                                <th>loading</th>
                                <th>loading</th>
                                <th>loading</th>
                            </>
                    }
                </tr>
                <tr>
                    <td>EUR</td>
                    {
                        data.rates ?
                            <>
                                <th>{(5 / 100 * Number(data.rates.EUR)) + Number(data.rates.EUR)}</th>
                                <th>{data.rates.EUR}</th>
                                <th>{Number(data.rates.EUR) - (5 / 100 * Number(data.rates.EUR)) }</th>
                            </> :
                            <>
                                <th>loading</th>
                                <th>loading</th>
                                <th>loading</th>
                            </>
                    }
                </tr>
                <tr>
                    <td>IDR</td>
                    {
                        data.rates ?
                            <>
                                <th>{(5 / 100 * Number(data.rates.IDR)) + Number(data.rates.IDR)}</th>
                                <th>{data.rates.IDR}</th>
                                <th>{Number(data.rates.IDR) - (5 / 100 * Number(data.rates.IDR)) }</th>
                            </> :
                            <>
                                <th>loading</th>
                                <th>loading</th>
                                <th>loading</th>
                            </>
                    }
                </tr>
                <tr>
                    <td>JPY</td>
                    {
                        data.rates ?
                            <>
                                <th>{(5 / 100 * Number(data.rates.IDR)) + Number(data.rates.IDR)}</th>
                                <th>{data.rates.IDR}</th>
                                <th>{Number(data.rates.IDR) - (5 / 100 * Number(data.rates.IDR)) }</th>
                            </> :
                            <>
                                <th>loading</th>
                                <th>loading</th>
                                <th>loading</th>
                            </>
                    }
                </tr>
                <tr>
                    <td>CHF</td>
                    {
                        data.rates ?
                            <>
                                <th>{(5 / 100 * Number(data.rates.CHF)) + Number(data.rates.CHF)}</th>
                                <th>{data.rates.CHF}</th>
                                <th>{Number(data.rates.CHF) - (5 / 100 * Number(data.rates.CHF)) }</th>
                            </> :
                            <>
                                <th>loading</th>
                                <th>loading</th>
                                <th>loading</th>
                            </>
                    }
                </tr>
                <tr>
                    <td>GBP</td>
                    {
                        data.rates ?
                            <>
                                <th>{(5 / 100 * Number(data.rates.GBP)) + Number(data.rates.GBP)}</th>
                                <th>{data.rates.GBP}</th>
                                <th>{Number(data.rates.GBP) - (5 / 100 * Number(data.rates.GBP)) }</th>
                            </> :
                            <>
                                <th>loading</th>
                                <th>loading</th>
                                <th>loading</th>
                            </>
                    }
                </tr>
            </table>
        </div>
    );
}

export default App;

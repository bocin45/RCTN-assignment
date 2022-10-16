import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Button from "./component/Button";

function App() {
    const [text, setText] = useState('')
    const [num, setNum] = useState('');

    const setTextField = (a) => {
        setText(prevState => `${prevState}` + a);
    }

    const storeNum = (a) => {
        setNum(prevState => `${prevState}` + a);
    }

    const clearValue = () => {
        setText('')
    }
    const removeOneValue = () => {
        setText(prevState => prevState.slice(0, -1))
    }

    const calculate = () => {
        console.log(eval(text))
        setText(prevState => `${prevState}` + ' = ' + eval(text));
    }

    return (
        <div className="App">
            <input type="text" value={text}/>
            <div>
                <Button
                    num={'AC'}
                    onClick={() => {
                        clearValue()
                    }}
                />
                <Button
                    num={'CE'}
                    onClick={() => {
                        removeOneValue()
                    }}
                />
                <Button
                    num={'*'}
                    onClick={() => {
                        setTextField('*')
                    }}
                />
                <Button
                    num={'/'}
                    onClick={() => {
                        setTextField('/')
                    }}
                />
            </div>
            <div>
                <Button
                    num={7}
                    onClick={() => {
                        setTextField(7)

                    }}
                />
                <Button
                    num={8}
                    onClick={() => {
                        setTextField(8)
                    }}
                />
                <Button
                    num={9}
                    onClick={() => {
                        setTextField(9)
                    }}
                />
                <Button
                    num={'-'}
                    onClick={() => {
                        setTextField('-')
                    }}
                />
            </div>
            <div>
                <Button
                    num={4}
                    onClick={() => {
                        setTextField(4)

                    }}
                />
                <Button
                    num={5}
                    onClick={() => {
                        setTextField(5)

                    }}
                />
                <Button
                    num={6}
                    onClick={() => {
                        setTextField(6)

                    }}
                />
                <Button
                    num={'+'}
                    onClick={() => {
                        setTextField('+')
                    }}
                />
            </div>
            <div>
                <Button
                    num={1}
                    onClick={() => {
                        setTextField(1)

                    }}
                />
                <Button
                    num={2}
                    onClick={() => {
                        setTextField(2)

                    }}
                />
                <Button
                    num={3}
                    onClick={() => {
                        setTextField(3)
                    }}
                />
                <Button
                    num={'='}
                    onClick={() => {
                        calculate()
                    }}
                />
            </div>
            <div>
                <Button
                    num={0}
                    onClick={() => {
                        setTextField(0)
                    }}
                />
                <Button
                    num={'.'}
                    onClick={() => {
                        setTextField('.')
                    }}
                />
            </div>

        </div>
    );
}

export default App;

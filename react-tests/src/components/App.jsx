import { useEffect, useState } from 'react'


function App() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [inputVal, setInputVal] = useState('')

    const onClick = () => setToggle(prevState => !prevState)

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    })

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    hello
                </a>
            </div>
            <h1>Vite + React</h1>

            <div className="card">
                <button data-testid="increment-button" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            {data && <div>has data</div>}
            {toggle && <div data-testid="toggle-element">toggle</div>}
            <button data-testid="toggle-button" onClick={onClick}>
                toggle-click
            </button>

            <div data-testid="input-value">{inputVal}</div>
            <input
                data-testid="input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
            />
        </>
    )
}

export default App

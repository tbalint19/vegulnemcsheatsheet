// Minimal React component

const { useState } = require("react")

// Without JSX
const MyComponent = (props) => {
    return React.createElement("div", {
        onClick: () => console.log("Haho!"),
        className: "container"
    }, React.createElement("h1", {}, `Hello ${props.name}`),
    React.createElement("p", {}, "This is a paragraph")
    )
}

// With JSX
const MyComponent = ({ name }) => {
    return (
        <div onClick={() => console.log("Haho!")} className="container">
            <h1>Hello { name }</h1>
            <p>This is a paragraph</p>
        </div>
    )
}


// Use MyComponent is App
const App = () => {

    const aName = "Lajos"

    return (
        <div>
            This i my app
            <MyComponent name={"Bela"}/>    {/** This is a comment in JSX */}
            <MyComponent name={aName}/>     {/** add name param to "props" object - value can be string, number... function */}
        </div>
    )
}


// Conditional rendering
const MyOtherComponent = ({ isActive }) => {

    return (
        <div>
            { isActive && <><p>The user is</p><p>Active</p></> }
            { !isActive && "Passive" }

            {/** OR! */}

            { isActive ? "Active" : "Passive" }
        </div>
    )
}

// Use of MyOtherComponent
const App = () => {

    return (
        <div>
            This i my app

            <MyOtherComponent isActive={true} />
            <MyOtherComponent isActive={false}/>
            <MyOtherComponent isActive={true}/>
        </div>
    )
}

// Loops in JSX
const App = () => {

    const people = [ "bela", "lajos", "kazmer" ]

    return (
        <div>
            This is my app
            { people.map(person => (
                <p key={person}>{ person }</p>)) }
        </div>
    )
}

// Reactivity - useState
const App = () => {
    const [ count, setCount ] = useState(0)
    // WHERE?
    // - Itt, mert ennek a komponensnek van ra szuksege

    // - Kell masik komponensnek?
    // - Childnak: ITT marad, propsba mehet a count is meg a setCount is akar
    // - Parent: MEGY at a parentba a state, es leadjuk propskent
    // - Sibling: MEGY a kozos parentbe, leadjuk propskent mindkettonek

    // MASIK gondolkodas - minden egybol a parentbe, mert onnan barhova le lehet dobni
}











const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ])
}


// Instead of the above code, use Destructuring an easy way for extractin info

/**
 
  const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}

*/


const App = () => {
    return React.createElement(
        "div",
        {id: 'important'},
        // Childrens
        [
            React.createElement("h1",{}, "Adopt-me"),
            React.createElement(Pet, {name: 'Luna',   animal: 'dog',  breed: 'gsd'}),
            React.createElement(Pet, {name: 'Pepper', animal: 'bird', breed: 'Cockatiel'}),
            React.createElement(Pet, {name: 'Doink',  animal: 'cat',  breed: 'stray'})
        ]
    )
}

//  ReactDOM.render("<h1>Karan</h1>", document.getElementById('root')) will not work in Pure React
ReactDOM.render(React.createElement(App), document.getElementById("root"))

// You can do this Also though in Pure React
// ReactDOM.render(App(), document.getElementById("root"))
var rootElement = document.getElementById("root"); // взимаме елемента
var root = ReactDOM.createRoot(rootElement); // взимаме ДОМ-а


//NATIVE REATCT JS =>
// const reactElement = React.createElement(
// 'header',
// {className: 'site-header'}, 
// React.createElement('h1', {}, 'Hello from React!!!'),
// React.createElement('h2', {}, "React slogan"),
// );


//JSX ->
var reactElement = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello from JSX!"
    ),
    React.createElement(
        "h2",
        null,
        "React slogan"
    )
);

root.render(reactElement); // рендерирай вътре в себе си реакт елемента
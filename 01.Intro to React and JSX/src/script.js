const rootElement = document.getElementById("root"); // взимаме елемента
const root = ReactDOM.createRoot(rootElement); // взимаме ДОМ-а


//NATIVE REATCT JS =>
// const reactElement = React.createElement(
// 'header',
// {className: 'site-header'}, 
// React.createElement('h1', {}, 'Hello from React!!!'),
// React.createElement('h2', {}, "React slogan"),
// );



 //JSX ->
const reactElement = (
<header className="site-header">
    <h1>Hello from JSX!!!</h1>
    <h2>React slogan</h2>
    </header>
    );

root.render(reactElement) // рендерирай вътре в себе си реакт елемента
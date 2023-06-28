# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


_------------------
constructor(): El método constructor() es el primer método que se llama cuando se crea un componente. Se utiliza para inicializar el estado y vincular los controladores de eventos.

El método constructor() toma props como argumento y siempre debe comenzar con una llamada a super(props) para asegurarse de que se ejecute correctamente el constructor de la clase padre del componente. Dentro del constructor, puedes establecer el estado inicial asignando un objeto a this.state.

getDerivedStateFromProps(): El método getDerivedStateFromProps() es un método estático que se llama justo antes de renderizar y se invoca en cada renderización. Toma como argumentos las props actualizadas y el estado actual, y debe devolver un objeto para actualizar el estado, o null si no es necesario actualizar el estado. Este método rara vez se utiliza, pero puede ser útil en casos excepcionales cuando el estado necesita actualizarse en función de cambios en las props.

render(): El método render() es un método requerido en un componente de React. Es responsable de devolver el JSX que define la estructura y el contenido del componente.

El método render() se invoca cada vez que hay un cambio en el estado o las props del componente. Debe ser una función pura, lo que significa que no debe modificar el estado del componente ni interactuar directamente con el DOM del navegador.

componentDidMount(): El método componentDidMount() se llama inmediatamente después de que el componente se monta (es decir, se inserta en el DOM). Se utiliza comúnmente para realizar efectos secundarios, como la obtención de datos, las suscripciones o la modificación del DOM. Este método es un buen lugar para inicializar los recursos necesarios para el componente. Solo se llama una vez en el ciclo de vida del componente.

Aquí está el orden en el que se llaman estos métodos del ciclo de vida durante el ciclo de vida del componente:

constructor()
getDerivedStateFromProps()
render()
componentDidMount()

Nota: En las últimas versiones de React, se han introducido los hooks, que proporcionan una forma más flexible de gestionar los ciclos de vida y el estado de los componentes. Si estás comenzando un nuevo proyecto o trabajando con una versión más reciente de React, es posible que desees considerar el uso de hooks en lugar de depender únicamente de los métodos del ciclo de vida.
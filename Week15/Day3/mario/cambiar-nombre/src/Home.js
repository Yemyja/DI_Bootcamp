import {useState} from "react";

const Home= () => {
    const[name, setName] = useState("Mario");
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("Luigi");
        setAge(30);

    }
    return (
    <>
    <h2> HomePage</h2>
        <p>{name} is {age} years old</p>
        <button onClick= {handleClick}>Click me</button>
    
</>
);
}
export default Home;
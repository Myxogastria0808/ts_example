import World from "./world";

const root = document.getElementById('root');
//インスタンス化
const world = new World('Helllo World!');

world.sayHello(root);
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold mb-6">Welcome to the Todo App welcome..........</h1>
    <div className="space-x-4">
      <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
      <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded">Signup</Link>
    </div>
  </div>
);

export default Home;

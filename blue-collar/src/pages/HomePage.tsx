import ButtonElement from '../components/atoms/button/Button';
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <ButtonElement ><Link to="/signup">Job seeker</Link></ButtonElement>
          <ButtonElement><Link to="/create-listing">Job listing</Link></ButtonElement>
      </div>
    );
  }
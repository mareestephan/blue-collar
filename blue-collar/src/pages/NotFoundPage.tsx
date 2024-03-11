import { Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
      <div>
        <h1>404 Not Found</h1>
        <Link to="/">Back home</Link>
      </div>
    );
  }
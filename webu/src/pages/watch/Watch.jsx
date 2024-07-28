import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./watch.scss";
import { Link, useLocation } from 'react-router-dom';
export default function Watch() {
  const location  = useLocation();
  const movie = location.state.some;
  console.log(movie.video)
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
      />
    </div>
  );
}

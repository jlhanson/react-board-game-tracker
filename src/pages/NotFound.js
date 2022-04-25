import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-1'>404</h1>
        <p className='display-5'>Page Not Found</p>
        <p className='lead'>
          <Link exact to='/'>
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;

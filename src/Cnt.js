import logo from './logo.svg';
import './App.css';
let page ="Home1";
function Cnt(props) {
  return (
   <>
      <div className='container'>
        <h2>{props.page}</h2>
      </div>
   </>
  );
}

export default Cnt;

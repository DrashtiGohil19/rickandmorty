import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let [val, setval] = useState([])
  let [status, setstatus] = useState(false)

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        // handle success
        console.log(response);
        setval(response.data.results)
        setstatus(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])


  return (

    <div className='App'>

      <h1>The Rick and Morty API</h1>
      <section className='wrapper'>
        {
          val.map((data) => {
            return (
              <>
                <div className='body'>
                  <div className='outer-box'>
                    <div className='inner-box'>
                      <div className='image'>
                        <img src={data.image} className='img-fluid'></img>
                      </div>
                      <div className='box-contant'>
                        <div className='ttl'>
                          <a>
                            <h2 className='m-0'>{data.name}</h2>
                          </a>
                          <span className='status'>
                            <span className=' d-flex'>
                              <div className={data.status === 'Alive' ? 'icon-green' : data.status === 'Dead' ? 'icon-red' : 'icon-grey'}></div>
                              <p>{data.status}</p>
                              <p> - </p>
                              <p>{data.species}</p>
                            </span>
                          </span>
                        </div>
                        <div className='ttl'>
                          <span className='grey'>
                            Last Known Location:
                          </span>
                          <span>
                            <a>{data.location.name}</a>
                          </span>
                        </div>
                        <div className='ttl'>
                          <span className='grey'>
                            First seen in:
                          </span>
                          <span>
                            <a>{data.origin.name}</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </section>
    </div>
  )
}


export default App
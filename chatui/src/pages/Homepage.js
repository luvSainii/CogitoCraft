
import {Link} from "react-router-dom"

export default function Component() { 
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <span className="navbar-brand " style={{color:"#7531F9"}} to="/">CogitoCraft</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto
       mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">AI ChatBot</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Sci-Fi Image</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Summary</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Paragraph</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">JS Converter</Link>
        </li>
      </ul>
      <span className="navbar-text me-4 mb-2 mb-lg-0">
      <Link className="nav-link active" style={{color:"#7531F9"}} to="#">Logout</Link>
      </span>
    </div>
  </div>
</nav>

<div className="col-md-8 mx-auto mt-5 px-auto "  style={{background:"#1B1610",height:450,color:"white"}}>{}</div>
<div className=" col-md-8 mx-auto">
  <input type="text" className="form-control mb-1" placeholder="Ask me anything..." aria-label="Ask me anything..." aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" style={{color:"#7531F9",background:"#1B1610"}} type="button" id="button-addon2">Send</button>
</div>
</>
  )
}
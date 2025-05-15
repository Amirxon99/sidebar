import "./hero.css";
import data from "../../../public/data.js";
function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="box">
        <table>
          <thead>
            <tr className="tr">
              <th>Customer Name</th>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((odam, i) => {
              return (
                <tr className="tr" key={i}>
                  <td>{odam.customer_name}</td>
                  <td>{odam.Company}</td>
                  <td>{odam.phoneNumber}</td>
                  <td>{odam.Email}</td>
                  <td>{odam.Country}</td>
                  
                  <td>
                    <button className="tr-btn" style={{backgroundColor: odam.Status=='Active'?'#16C09861':'#FFC5C5',color:odam.Status=='Active'?'#008767':'#DF0404'}}>{odam.Status}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hero;

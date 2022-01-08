const admin = () => {
    return (
        <div className="admin-container">
            <form>
              <div className="inputs"> 
               <label style={{padding:"10px"}}>USERNAME</label>
                <input type="text" />
                </div>
                <div className="inputs">
                <label style={{padding:"10px"}}>PASSWORD</label>
                <input type="text"  />
                </div>
            <button  style={{

                color:"white",
                backgroundColor:'#f1356d',
                borderRadius:'8px',
                padding:'10px',
                border:'0px'
            }}>Login</button>
            </form>
        </div>
      );
}
 
export default admin;

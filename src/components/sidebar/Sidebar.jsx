import  './sidebar.css'

function Sidebar() {
    function menu(){
             const sidebar=document.getElementById("sidebar");
             const openIcon=document.getElementById("open-icon");
             const closeIcon=document.getElementById("close-icon");
             const hero=document.getElementById("hero");
             sidebar.classList.toggle("close");
             if(sidebar.classList.length<2){
                 closeIcon.style.display="none";
                 openIcon.style.display="block";
                 hero.style.marginLeft="310px";
                }else{
                    hero.style.marginLeft="0px";
                 closeIcon.style.display="block";
                 openIcon.style.display="none";
             }
    }
  return (
    <div className='sidebar' id='sidebar'>
        <img src="./logo.png" alt="" />
        <button id='sidebar-btn' onClick={menu}>
            <i className="fa-solid fa-circle-left" id='open-icon'></i>
            <i className="fa-solid fa-circle-right" id='close-icon'></i>
        </button>
         <nav>
            <ul>
                <li><a href="#"><i className="fa-solid fa-key"></i>   Dashboard </a></li>
                <li><a href="#"><i className="fa-solid fa-key"></i>   Dashboard </a></li>
                <li><a href="#"><i className="fa-solid fa-key"></i>   Dashboard </a></li>
                <li><a href="#"><i className="fa-solid fa-key"></i>   Dashboard </a></li>
                <li><a href="#"><i className="fa-solid fa-key"></i>   Dashboard </a></li>
                <li><a href="#"><i className="fa-solid fa-key"></i>   Dashboard </a></li>
            </ul>
         </nav>


    </div>
  )
}

export default Sidebar
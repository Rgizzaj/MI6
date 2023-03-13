export default function MainContent ({setOpen}) {

const handleCLick =()=>{

setOpen(true)


}

    return (

    <div id="main" className="main-content">

                <span onClick={handleCLick}> X </span>
                <h1>Welcome to MI6</h1>

                <script src="js.js"></script>

    </div>


    )
}
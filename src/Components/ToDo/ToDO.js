import './ToDo.css'
const ToDo =()=>{
    const date = new Date()
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var weekday = days[ date.getDay() ];
    var month = months[ date.getMonth() ];
    var day = date.getDate()
    return(<>
    <h1 className='day_date'>{`${weekday},${day} ${month}`}</h1>
    </>)
}
export default ToDo
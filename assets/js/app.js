// Get All Element
const todo_form = document.getElementById('todo_form');
const list_group = document.querySelector('.list-group')
const card_footer = document.querySelector('.card-footer');

// Get all form
todo_form.onsubmit = (e) => {
  e.preventDefault()


  // Get all data with to do form 
  const form_data = new FormData(e.target);
  const {name, client, date, time} = Object.fromEntries(form_data.entries());
  const data = Object.fromEntries(form_data.entries());


  // condition field are required
  if (!name || !client || !data || !time ) { 

    alertNotification('all field are required');

  } else {

      // get date time
      const start_time = Date.now();
      const last_time = new Date( date + ' ' + time );
      const end_time = last_time.getTime();


      // Macke Random Data
      const id = Math.floor(Math.random() * 1000) + start_time;
      
      // macke passing data
      const singleFormData =  {name, client, start_time, end_time, id }
    
      // Macke Passing Data
      createLsData('toDoApp', singleFormData )

      // Form Reset
      e.target.reset();

      // show display data 
      displayData();

  }

  
}

const displayData = () => {
  
  const allData = readLsData('toDoApp');

  let datas = [] ;

  if (!allData || allData.length == 0) {
    datas = '';
  } 

  // show data display
  if(allData) {
    allData.reverse().map ( item => {
      datas += `
      
              <li class="list-group-item shadow">
                Client : ${item.name} | ${item.client} | Remain time :
                  <strong>
                    ${timeKeeper(item.end_time)}
                  </strong>
                  <button onclick="deleteList(${item.id})" class="close">×</button>
                  <span style="${progressBar(item.start_time, item.end_time )}" class="status"></span>
                </li>
      
      `
    })
  }

  list_group.innerHTML = datas;

  card_footer.innerHTML = ` <p>Total item number : <span>${allData.length}</span></p>`


}

 // show data 

setInterval( () => {
  displayData();
  }, 1000)
  

  // delet data
  const deleteList = (e) => {
  
    const id = e;
   
    let allData = readLsData('toDoApp');
    const index = allData.findIndex(data => data.id == id)

    allData.splice(index, 1)

    updateLSData('toDoApp', allData);

    displayData();

  }




//alert notification
const alertNotification = (showSms) => {
    return alert(showSms);
}

//time keeper Function
const timeKeeper = (end_time) => {
   
    const total_tiem = Math.floor(Math.abs(end_time - Date.now())) ; 

    // Get the total Time
   const total_sec = Math.floor(total_tiem / 1000);
   const total_min = Math.floor(total_sec / 60);
   const total_hours = Math.floor(total_min / 60);
   const total_day = Math.floor(total_hours / 24);

   // Get the single Time
   const hours = total_hours - ( total_day * 24 );
   const min = total_min - ( total_day * 24 * 60 ) - ( hours * 60 );
   const sec = total_sec - ( total_day * 24 * 60 * 60 ) - ( hours * 60 * 60) - ( min * 60 );

    // return data 

    if (end_time < Date.now()) {
        return ` [ <strong style="color: red">Time over</strong> ]
        `
    } else {
        return ` [ ${total_day} days ${hours} hours ${min} mins ${sec} Sec ] `
    }

  
}



//create ls date
const createLsData = (key,data) => {
    //get the date
    const getAllData = localStorage.getItem(key);

    //store data val
    let listData = [];

    // data have
    if (getAllData) {
        listData = JSON.parse(getAllData);
    }

    //new data add to array
    listData.push(data);

    //all data passing to localstorege
    localStorage.setItem(key, JSON.stringify(listData));

}

//read ls data
const readLsData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}


//progress bar
const progressBar = (start_time, end_time) => {

    const total_tiem = end_time - start_time;
    const currectTime = end_time - Date.now();

    const progressWifth = Math.floor(( 100   * currectTime ) / total_tiem);

    let width = '';

    if (progressWifth >= 0 && progressWifth <= 33) {
        width = `width:${ progressWifth  }% ; background-color:pink; `
    } else if (progressWifth >= 34 && progressWifth <= 66) {
        width = `width:${progressWifth }% ; background-color:blue; `
    } else if (progressWifth >= 67 && progressWifth <= 100) {
        width = `width:${progressWifth}% ; background-color:green; `
    } else {
        width = `width:${ progressWifth }% ; background-color:red; `
    }

    return width;
}


/// update data
const updateLSData = (key, array) => {
    localStorage.setItem(key, JSON.stringify(array));
}
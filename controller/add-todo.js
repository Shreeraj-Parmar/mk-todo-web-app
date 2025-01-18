import { totaltask } from "./index.js";

const task = document.querySelector('#addtext');// inputtask for task add 
const taskdis = document.querySelector('#detail');//  ul tag
let panding = document.querySelector('.panding');// panding counts.

//that function used for new task added.
const taskadd = ()=>{
    if (task.value !== ''){
        
        const taskpera = document.createElement('li');
        const taskdiv  = document.createElement('div');
        
        const editbtn = document.createElement('button');
        const delbtn = document.createElement('button');
        const complatebtn = document.createElement('button');
        const importntbtn = document.createElement('button');
        
        delbtn.innerText = 'delete';
        editbtn.innerText = 'edit';
        complatebtn.innerText = 'complate';
        importntbtn.innerText = 'imp';
        
        taskdiv.classList.add('pera');
        taskpera.classList.add('p');
        delbtn.classList.add('btnsize');
        editbtn.classList.add('btnsize');
        complatebtn.classList.add('btnsize');
        importntbtn.classList.add('btnsize');
        
        delbtn.setAttribute('data-action','delete');
        editbtn.setAttribute('data-action', 'edit');
        complatebtn.setAttribute('data-action', 'complate');
        importntbtn.setAttribute('data-action', 'impbtn');
        
        let taskid =Math.floor(Math.random()*Math.pow(9,5));
        let dataTask = {
            id:taskid,
            task:task.value,
            complatetask : false,
            import : false
        }

        totaltask.push(dataTask);
        
        taskpera.setAttribute('data-id', dataTask.id);
        taskpera.setAttribute('status-id','panding')

        localStorage.setItem('task',JSON.stringify(totaltask));
        
        let data =JSON.parse(localStorage.getItem('task'));
        let maintask = data.find(task=>task.id === taskid);

        taskpera.innerText = maintask.task;
        
        taskdis.appendChild(taskdiv);                                         
        taskdiv.appendChild(taskpera);                                         
        taskdiv.appendChild(editbtn);
        taskdiv.appendChild(importntbtn);
        taskdiv.appendChild(complatebtn);
        taskdiv.appendChild(delbtn);
        
        task.value = '';
        task.focus();
        let uncomlatetask = totaltask.filter(task => task.complatetask === false);
        panding.innerText = `Panding task is ${uncomlatetask.length}`;
        }
    else {
        alert('please enter your task');
        return false;
    }
}

export{taskadd };
export{task ,panding };

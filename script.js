// Part 1: Variable Declaration

let clickCount = 0;

// Part 2
let buttons = document.querySelectorAll('.button')    //querySelectorAll() HTML থেকে .button class-এর সব button খুঁজে বের করে।

// Part 3
for(let button of buttons){
    button.addEventListener("click", function (event){    //প্রতিটি button-এর উপর click event যোগ করা হয়েছে।
        window.alert("Board updated successfully")      //Popup message দেখায়।
        event.target.setAttribute("disabled", true)     //এখানে সবচেয়ে গুরুত্বপূর্ণ ৩টা জিনিস আছে event মানে এখানে click event। target মানে যে element-এ click হয়েছে। HTML attribute যোগ করে।
        let taskAssignedCoount = document.querySelector(".taskAssignedCount");   //HTML থেকে class="taskAssignedCount" element বের করছে।
        let taskAssigned = Number(taskAssignedCoount.textContent);    //string k number banano hocche
        if(taskAssigned > 0){     //যদি task থাকে তাহলে ভিতরের code চলবে।
            taskAssigned--;    //number pichon take count hobe jemon 6 -> 5 -> 4 arkm
            taskAssignedCoount.textContent = taskAssigned;    //HTML update হচ্ছে।
        }
        let AssignedCount = document.querySelector(".AssignedCount");    //Completed task count বের করছে।
        let Assigned = Number(AssignedCount.textContent);    //text k number korbe
        if(Assigned > 0){
            Assigned++;     //Completed task 1 1 kore jog hobe
            AssignedCount.textContent = Assigned;   //HTML update করছে।
        }
        let cardTitle = event.target.parentNode.parentNode.querySelector(".cardTitle").textContent;
        console.log(cardTitle);
        const activityHistory = document.getElementById("activityHistory");    //History section বের করছে।
        let currentTimeHistory = new Data().toLocaleTimeString("en-US",{
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
        });
        const div = document.createElement("div");     // নতুন div তৈরি হচ্ছে।
        div.innerHTML = `
        <p class="text-gray-800 font-medium mt-5">You have completed the task ${cardTitle} at ${currentTimeHistory}</p>
        `;     //নতুন div-এর ভিতরে You have completed... লেখা বসানো হচ্ছে।
        activityHistory.appendChild(div);    //History section-এর শেষে নতুন message যোগ হচ্ছে।
        clickCount++;
        if(clickCount === 6){     //যদি ৬টা task complete হয়
            window.alert("Congrates!!! You have completed all the current task");
            clickCount = 0;
        }
         document.getElementById("clearHistory").addEventListener('click', function () {
        document.getElementById("activityHistory").textContent = ''
    })

    });
}
document.getElementById("changeColor").addEventListener('click', function () {
  const randomColor =`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;


  document.body.style.backgroundColor = randomColor;
  document.body.style.transition = "background-color 1.5s ease-in-out";
})

  let currentDate = new Date();
  let weekday = currentDate.toLocaleDateString("en-US", { weekday: "short" });
  let options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  let datePart = currentDate
    .toLocaleDateString("en-US", options)
    .replace(/,/, "");
  document.querySelector(".weekDay").textContent = `${weekday},`;
document.querySelector(".dynamicDate").textContent = datePart;

document.getElementById('btn').addEventListener('click', function () {
  window.location.href = './blog.html'
})

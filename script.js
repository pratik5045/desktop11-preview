var Month = document.querySelector('.month');
var Monthone = document.querySelector('.month1');

Month.addEventListener("click", function(){
   Monthone.classList.toggle('mon');
}   
)

var DAte = document.querySelector('.date');
var dummy = document.querySelector('.date1');

DAte.addEventListener("click", function(){
    dummy.classList.toggle('date-copy');
})

var Year = document.querySelector('.year');
var select = document.querySelector('.year-cpy');

Year.addEventListener("click",function(){
    select.classList.toggle('dummy-year');
})

const inputField = document.querySelector('.month');
const monthList = document.querySelector('.month-list');

inputField.addEventListener('click', () => {
    monthList.style.display = 'block';
  });
  
  monthList.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
      inputField.value = e.target.textContent;
      monthList.style.display = 'none';
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!monthList.contains(e.target) && !inputField.contains(e.target)) {
      monthList.style.display = 'none';
    }
  });

 const yearField = document.querySelector('.year');
 const yearList = document.querySelector('.year-cpy');

 yearField.addEventListener('click', () => {
    yearList.style.display = 'block';
  });
  
  yearList.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
      yearField.value = e.target.textContent;
      yearList.style.display = 'none';
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!yearList.contains(e.target) && !yearField.contains(e.target)) {
      yearList.style.display = 'none';
    }
  });

const dateField = document.querySelector('.date');
const dateList = document.querySelector('.date1');

 dateField.addEventListener('click', () => {
    dateList.style.display = 'block';
  });
  
  dateList.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
      dateField.value = e.target.textContent;
      dateList.style.display = 'none';
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!dateList.contains(e.target) && !dateField.contains(e.target)) {
      dateList.style.display = 'none';
    }
  });


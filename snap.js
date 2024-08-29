const Features = document.getElementById('features');
const Company = document.getElementById('company');
const information = document.querySelector('.information')

Features.addEventListener("click", ()=>{
 if (document.getElementById('featuresOptions').style.display === "none") {
    document.getElementById('featuresOptions').style.display = "block";  
    const optionsDown = document.getElementById('featBtnDown');
    optionsDown.src = '/images/icon-arrow-up.svg';
 }else{
  document.getElementById('featuresOptions').style.display = "none";
  const optionsDown = document.getElementById('featBtnDown');
  optionsDown.src = '/images/icon-arrow-down.svg';
 }

})

Company.addEventListener("click", ()=>{
 if (document.getElementById('companyOptions').style.display === "none") {
    document.getElementById('companyOptions').style.display = "block";  
    const optionsDown2 = document.getElementById('compBtnDown');
    optionsDown2.src = '/images/icon-arrow-up.svg';
 }else{
  document.getElementById('companyOptions').style.display = "none";
  const optionsDown2 = document.getElementById('compBtnDown');
  optionsDown2.src = '/images/icon-arrow-down.svg';
 } 

})


information.style.color = 'black'
let info = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, doloribus!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores iure ducimus ipsa consequuntur autem in totam! At, iste ducimus?', 'Get your workload and tensions reduced, you can own a truck for as low as you can afford. We have Top efficient, Monstrous and top tier Trucks of various makes and brands that suits your budget'];

let count = 0;

setInterval(() => {
   information.textContent= info[count];
   count ++
   if(count >2){
      count = 0;
   }
}, 3000);

let images = ['/trucks/received_432876853082474.jpeg', '/trucks/20240730_183144.jpg', '/trucks/FB_IMG_1720092284833.jpg', '/trucks/20240730_182735.jpg', '/trucks/20240730_183220.jpg']
let imagedesc = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet!"]

let truckName = ['Volvo', 'Lamborghini', 'Chevrolet']


 setInterval(() => { 
   let imagePicker =  Math.floor(Math.random() * images.length)
   document.getElementById('showglass').src = images[imagePicker]
   document.getElementById("imageDescr").textContent = imagedesc[imagePicker]
   document.getElementById('truckName').textContent = truckName[imagePicker]
   // if (imagePicker == 0) {
   //    document.getElementsByClassName('.desc').textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet!"
   // } else if (imagePicker == 1){
   //    document.getElementsByClassName('.desc').textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet! loremmejedjosjcxijixjxixeijsixjoxkosijxijsijsijisjcisjcijs"
   // } else if (imagePicker == 2){
   //    document.getElementsByClassName('.desc').textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Loremwokdojwodjkojspoqkzpkqoksojksijwidjodkwodjij ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet! loremmejedjosjcxijixjxixeijsixjoxkosijxijsijsijisjcisjcijs"
   // }


 }, 3000);

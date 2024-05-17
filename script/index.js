let state = "closed";
      // let m = document.querySelector(".men");
      // let n = document.querySelector(".br");
      let t = document.querySelector(".test");
      let list = document.getElementById("mylist");
      let data = ['<a href = "#About">About</a>', '<a href = "#Tech">Technologies</a>', '<a href = "#Edu">Education</a>', '<a href = "#Contact">Contact Me</a>'];
      function myFunction(x) {
        if (state == "closed") {
          // m.style.visibility = "initial";
          // n.style.visibility = "initial";
          t.style.visibility = "initial";
          data.forEach((item)=>{
            let li = document.createElement("li");
            // li.innerText = item;
            li.innerHTML = item;
            list.appendChild(li);
            li.style.listStyleType = 'none';
          })
          state = "open";
        } else {
          // m.style.visibility = "hidden";
          // n.style.visibility = "hidden";
          t.style.visibility = "hidden";
          state = "closed";
          list.innerHTML = "";
        }
        x.classList.toggle("change");
      }
let btn = document.querySelector(".btn");
btn.addEventListener('click', parser);

let y = 0;
function parser()
{
  let form = document.querySelector(".form");
  let para = document.createElement("p");
  para.textContent =  "Please Input All Fields";
  para.style.color = "red";
  para.style.textAlign = "center";
  para.style.fontSize = "25px";
  let area = document.getElementById("message").value;
  let name = document.getElementById("name").value;
  let num = document.getElementById("num").value;
  let title = document.getElementById("title").value
  
  let str = `mailto:wisdomp837@gmail.com?subject=${title}&body=First-name:%20${name}%0APhone-Number:%20${num}%0AMessage:%20${area}%0A`;
  window.open(str, "_blank");
  location.reload(true);

}


let login = document.getElementById('form')
login.addEventListener('submit',function(){
    console.log("submit")
    event.preventDefault();

    let email = form.email.value
    let password = form.password.value

    alert("login successfull...")

    fetch("https://sprinkle-marsh-jonquil.glitch.me")

    .then((res)=>res.json())
    .then((data)=>{
        let user = data.find((el,i)= el.email==email)
         if(user){
            if(user.password==password){
              alert("login success...")
              window.location.href = "quiz.html";
            }else{
                alert("please write correct password")
            }
         }else{

         }
        })
    }
    )
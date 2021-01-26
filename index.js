        function getRandom(min, max) {
             return Math.floor(Math.random() * (max - min) + min);
         }

          let myButton = document.getElementById("myButton");

          myButton.addEventListener("click",function(){

          let who = ['the dog','my granma','his turtle','my bird'];
          let what = ['eat','pissed','crushed','broked'];
          let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
            
          let randomwho = getRandom(who.length-1,0);
          let randomwhat = getRandom(what.length-1,0);
          let randomwhen = getRandom(when.length-1,0);
          
          let resultado = who[randomwho] + " " + what[randomwhat] + " " + when[randomwhen];

          let p = document.getElementById("excuse");
          p.innerHTML = resultado;
          console.log(resultado);
          });
            // 
        //     alert("click");
        //     });
        


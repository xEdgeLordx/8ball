let id = null;
            let Advice1 = false;
            let Advice2 = false;
            let Advice3 = false;
            let Advice4 = false;
            let Advice5 = false;
            let Advice6 = false;
            let Advice7 = false;
            let Advice8 = false;
            let Advice9 = false;
            let Advice10 = false;
            let Advice11 = false;
            let Advice12 = false;
            let Advice13 = false;
            let Advice14 = false;
            let Advice15 = false;
        let app = document.getElementById('app');
        updateView()
        function updateView(){
        app.innerHTML = /*html*/`
        <div class="container">
        <div class = "BallContainer" ><img id = "ball" onclick = "GetAdvice()" class="Ball" src = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Magic_eight_ball.png"></div>
        <div id="advice" class="text"></div>
        </div>
        <div class = "buttonBox">Not Getting the advice you seek? Click here.</div>
        <div class = "buttonBox">
        <div></div>
        <button onclick = "refresh()"></button>
</div>

        `
        }
        function GetAdvice(){
            document.getElementById('advice').innerHTML = "";
        
            GenerateAdvice()
        }
        function GenerateAdvice(){
           
            let advice = document.getElementById('advice');

            let adviceNum = Math.floor(Math.random() * 10)

            if(adviceNum == 1 && Advice1 == false){
                advice.innerHTML = "Yes."
                Advice1 = !Advice1;
            } else if(adviceNum == 2 && Advice2 == false){
                advice.innerHTML = "no."
                Advice2 = !Advice2;
            } else if(adviceNum == 3 && Advice3 == false){
                advice.innerHTML = "Yes sir"
                Advice3 = !Advice3;
            } else if(adviceNum == 4 && Advice4 == false){
                advice.innerHTML = "Hmmm perhaps soon"
                Advice4 = !Advice4;
            } else if(adviceNum == 5 && Advice5 == false){
                advice.innerHTML = "Huh?"
                Advice5 = !Advice5;
            } else if(adviceNum == 6 && Advice6 == false){
                advice.innerHTML = "If you pay."
                Advice6 = !Advice6;
            } else if(adviceNum == 7 && Advice7 == false){
                advice.innerHTML = "Why would you ask that?"
                Advice7 = !Advice7;
            } else if(adviceNum == 8 && Advice8 == false){
                advice.innerHTML = "Eyy im an 8ball"
                Advice8 = !Advice8;
            } else if(adviceNum == 9 && Advice9 == false){
                advice.innerHTML = "No no no"
                Advice9 = !Advice9;
            } else if(adviceNum == 10 && Advice10 == false){
                advice.innerHTML = "Seek legal council."
                Advice10 = !Advice10;

            }  else if(adviceNum == 11 && Advice11 == false){
                advice.innerHTML = "Seek legal council."
                Advice11 = !Advice11;

            }  else if(adviceNum == 12 && Advice12 == false){
                advice.innerHTML = "Seek help."
                Advice12 = !Advice12;

            }  else if(adviceNum == 13 && Advice13 == false){
                advice.innerHTML = "What a dumb question."
                Advice13 = !Advice13;

            }  else if(adviceNum == 14 && Advice14 == false){
                advice.innerHTML = "Not yet."
                Advice14 = !Advice14;

            }  else if(adviceNum == 15 && Advice15 == false){
                advice.innerHTML = "The answer you seek is elsewhere."
                Advice15 = !Advice15;

        } else{advice.innerHTML = "Ask again later."}}
        function refresh(){
            location.reload();
        }
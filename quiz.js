function updatePlayer(){
    document.getElementById("Player1").textContent=localStorage.getItem("player1")
    document.getElementById("Player2").textContent=localStorage.getItem("player2")
}
function updateScore(score1=0,score2=0){
    document.getElementById("Player1Score").textContent=score1
    document.getElementById("Player2Score").textContent=score2

}
function send(no1=0,no2=0){
   no1=document.getElementById(n1).value
   no2=document.getElementById(n2).value
   
}
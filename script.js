if(further.length){
  cSelected={r:move.r,c:move.c};
  cMoves=further;
  renderCheckers();

  if(
    document.getElementById("check-mode").value==="bot" &&
    cTurn==="b"
  ){
    setTimeout(()=>{
      if(cMoves.length){
        const next=cMoves[
          Math.floor(Math.random()*cMoves.length)
        ];
        applyCheckMove(cSelected,next);
      }
    },400);
  }
  return;
}
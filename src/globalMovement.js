 
 export function onKeyDown(e){
    console.log(e.code)
 }

export function onKeyUp(e){
    console.log(e.code)
}
export function gameAction(){
    console.log("here")
    window.requestAnimationFrame(gameAction)
}
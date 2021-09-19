var moved = false;
$(function(){
    $(".moving-button").on({
        mouseover:function(){
        	if(moved === true) {
          	$(this).css({left:"0px"});
          } else {
          	$(this).css({left:"65px"});
          }
          moved = !moved;
        },
        click:function(){
        	if(moved === true) {
          	$(this).css({left:"0px"});
          } else {
          	$(this).css({left:"65px"});
          }
          moved = !moved;
        }
    });
});

function onNoClick() {
    alert("Allora mangia la merda!");
}
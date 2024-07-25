
export function NavBar (){
    $(".side-nav").css("left", -$(".side-nav-inner").innerWidth());
$("#closeIcon").fadeOut(0);
$(".side-nav ul li").css("top", 150);

let left = $(".side-nav-inner").innerWidth();
function closeSideNav() {
  $(".side-nav").css("left", -left);
  $("#closeIcon").fadeOut(0);
  $("#openIcon").fadeIn(0);
  $(".side-nav ul li").animate({ top: 150 }, 80);
}

function openSideNav() {
  $(".side-nav").css("left", 0);
  $("#closeIcon").fadeIn(0);
  $("#openIcon").fadeOut(0);
  for (let i = 0; i < 6; i++) {
    $(".side-nav ul li")
      .eq(i)
      .animate({ top: 0 }, (i + 2) * 80);
  }
}

$(".menuIcon").click(() => {
  if ($(".side-nav").css("left") === "0px") {
    closeSideNav();
  } else {
    openSideNav();
  }
});


}
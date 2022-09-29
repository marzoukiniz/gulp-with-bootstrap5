//script for tabs
jQuery().ready(function() {
    initTabs($(".tabs"));
  });
  
  function initTabs(tabs) {
    shiftSelector(tabs);
  
    $(window).resize(function() {
      shiftSelector(tabs);
    });
  
    tabs.on("click", "a", function(e) {
      e.preventDefault();
      tabs.find("a").removeClass("active");
      $(this).addClass("active");
  
      shiftSelector(tabs);
    });
  }
  
  function shiftSelector(tabs) {
    let activeItem = tabs.find(".active");
    
    let activeWidth = activeItem.innerWidth();
    let activeHeight = activeItem.innerHeight();
    let itemPos = activeItem.position();
    console.log('active item: '+itemPos.left);
    tabs.find(".selector").css({
      left: itemPos.left + "px",
      width: activeWidth + "px",
      height: activeHeight + "px",
      top: itemPos.top + "px"
    });
  
    let activeBody = $(".tabs .active").attr("data-body");
    $(".tab-body > section").hide();
    $("." + activeBody).fadeIn();
  }
  
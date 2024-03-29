document.addEventListener("DOMContentLoaded", () => { 

  // Functions to open and close a modal 

  function openModal($el) { 

    $el.classList.add("is-active"); 

  } 

 

  function closeModal($el) { 

    $el.classList.remove("is-active"); 

  } 

 

  function closeAllModals() { 

    (document.querySelectorAll(".modal") || []).forEach(($modal) => { 

      closeModal($modal); 

    }); 

  } 

 

  // Add a click event on buttons to open a specific modal 

  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => { 

    const modal = $trigger.dataset.target; 

    const $target = document.getElementById(modal); 

    // console.log($target); 

 

    $trigger.addEventListener("click", () => { 

      openModal($target); 

    }); 

  }); 

 

  // Add a click event on various child elements to close the parent modal 

  (document.querySelectorAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button") || []).forEach(($close) => { 

    const $target = $close.closest(".modal"); 

 

    $close.addEventListener("click", () => { 

      closeModal($target); 

    }); 

  }); 

 

  // Add a keyboard event to close all modals 

  document.addEventListener("keydown", (event) => { 

    const e = event || window.event; 

 

    if (e.keyCode === 27) { 

      // Escape key 

      closeAllModals(); 

    } 

  }); 

}); 

 

// $(".modal-button").click(function() { 

//     var target = $(this).data("target"); 

//     $("html").addClass("is-clipped"); 

//     $(target).addClass("is-active"); 

//  }); 

 

//  $(".modal-close").click(function() { 

//     $("html").removeClass("is-clipped"); 

//     $(this).parent().removeClass("is-active"); 

//  }); 

 

// Mobile Menu 

const burgerIcon = document.querySelector("#burger"); 

const navbarMenu = document.querySelector("#nav-links"); 

 

burgerIcon.addEventListener("click", () => { 

  navbarMenu.classList.toggle("is-active"); 

}); 

 

// Categories Menu 

const menuList = document.querySelector(".menu-list"); 

 

menuList.addEventListener("click", (e) => { 

  if (e.target != "") { 

    for (let i = 0; i < menuList.children.length; i++) { 

      menuList.children[i].children[0].classList.remove("has-background-info"); 

      menuList.children[i].children[0].classList.remove("is-active"); 

    } 

    e.target.classList.toggle("has-background-info"); 

    e.target.classList.toggle("is-active"); 

  } 

}); 

 

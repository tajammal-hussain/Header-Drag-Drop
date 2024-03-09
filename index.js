// JavaScript for switching tabs
document.addEventListener("DOMContentLoaded", function () {
    const desktop = document.getElementById("desktop");
    const mobile = document.getElementById("mobile");
    const desktopContent = document.getElementById("desktopContent");
    const mobileContent = document.getElementById("mobileContent");
    const clearBtn = document.getElementById("clearBtn");

    // Event listeners for tabs
    desktop.addEventListener("click", function (e) {
      e.preventDefault();
      desktop;
      desktopContent.classList.remove("hidden");
      mobileContent.classList.add("hidden");
    });

    mobile.addEventListener("click", function (e) {
      e.preventDefault();
      desktopContent.classList.add("hidden");
      mobileContent.classList.remove("hidden");
    });

   // Clear button
  clearBtn.addEventListener("click", function () {
    let activeSortable;
    let targetContainer;
    if (!desktopContent.classList.contains("hidden")) {
      activeSortable = desktopContent.querySelectorAll(".connectedSortable span");
      targetContainer = document.getElementById("Dsortable10");
    } else if (!mobileContent.classList.contains("hidden")) {
      activeSortable = mobileContent.querySelectorAll(".connectedSortable span");
      targetContainer = document.getElementById("sortable6");
    }

    activeSortable.forEach((item) => {
      targetContainer.appendChild(item);
    });
  });
    const topbar = document.getElementById("topbar");
    const topbarspan = document.getElementById("topbarspan");
    const headermain = document.getElementById("headermain");
    const hmainspan = document.getElementById("hmainspan");
    const bottommain = document.getElementById("bottommain");
    const bmainspan = document.getElementById("bmainspan");

    topbar.addEventListener("mouseover", function () {
        hmainspan.style.display = "block";
    });
    topbar.addEventListener("mouseout", function () {
        hmainspan.style.display = "none";
    });

    headermain.addEventListener("mouseover", function () {
      hmainspan.style.display = "block";
    });
    headermain.addEventListener("mouseout", function () {
      hmainspan.style.display = "none";
    });
    bottommain.addEventListener("mouseover", function () {
        hmainspan.style.display = "block";
    });
    bottommain.addEventListener("mouseout", function () {
        hmainspan.style.display = "none";
    });

    const Dtopbar = document.getElementById("Dtopbar");
    const Dtopbarspan = document.getElementById("Dtopbarspan");
    const Dheadermain = document.getElementById("Dheadermain");
    const Dhmainspan = document.getElementById("Dhmainspan");
    const Dbottommain = document.getElementById("Dbottommain");
    const Dbmainspan = document.getElementById("Dbmainspan");
    Dtopbar.addEventListener("mouseover", function () {
        Dtopbarspan.style.display = "block";
    });
    Dtopbar.addEventListener("mouseout", function () {
        Dtopbarspan.style.display = "none";
    });
    Dheadermain.addEventListener("mouseover", function () {
      Dhmainspan.style.display = "block";
    });
    Dheadermain.addEventListener("mouseout", function () {
      Dhmainspan.style.display = "none";
    });
    Dbottommain.addEventListener("mouseover", function () {
        Dbmainspan.style.display = "block";
    });
    Dbottommain.addEventListener("mouseout", function () {
        Dbmainspan.style.display = "none";
    });
    
  });

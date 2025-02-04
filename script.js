document.addEventListener("DOMContentLoaded", function() {
    var seeMoreBtn = document.getElementById("seeMoreBtn");
    var moreInfo = document.getElementById("moreInfo");

    seeMoreBtn.addEventListener("click", function() {
        if (moreInfo.classList.contains("hidden")) {
            moreInfo.classList.remove("hidden");
            seeMoreBtn.textContent = "See Less";
        } else {
            moreInfo.classList.add("hidden");
            seeMoreBtn.textContent = "See More";
        }
    });
});

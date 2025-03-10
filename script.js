document.addEventListener("DOMContentLoaded", function() {
    const shareButton = document.querySelector(".share-button");
    const sharePopup = document.querySelector(".share-popup");

    shareButton.addEventListener("click", function() {
        this.classList.toggle("active");
    });

    // Close the popup when clicking outside
    document.addEventListener("click", function(e) {
        if (!shareButton.contains(e.target) && !sharePopup.contains(e.target)) {
            shareButton.classList.remove("active");
        }
    });
});
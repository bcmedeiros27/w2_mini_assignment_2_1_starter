// Create the reusable navigation implementation here.
document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.getElementById("shared-navigation");

    if (navigation) {
        navigation.innerHTML = `
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <a href="products.html">Products</a>
                <a href="services.html">Services</a>
            </nav>
        `;
    }
});
document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popup-content");


  const loginIcon = document.querySelector(".login-icon");
  const cartIcon = document.querySelector(".cart-icon");
  
  const viewMoreBtn = document.querySelector(".banner .banner-btn");

  
  let cartCount = 0;


  function hidePopup() {
    popup.classList.add("hidden");
    popupContent.innerHTML = "";
  }

  function showLoginPopup() {
    popup.classList.remove("hidden");
    popupContent.innerHTML = `
      <div id="login-form">
        <h3>Login</h3>
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <button id="loginBtn">Login</button>
      </div>
      <hr>
      <div id="signup-form">
        <h3>Sign Up</h3>
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <button id="signupBtn">Sign Up</button>
      </div>
      <br>
      <button id="closePopup" style="background: #a00; color: #fff; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Close</button>
    `;

    document.getElementById("closePopup").addEventListener("click", hidePopup);


    document.getElementById("loginBtn").addEventListener("click", function () {
      
      alert("Login action triggered!");
      hidePopup();
    });

    document.getElementById("signupBtn").addEventListener("click", function () {
      
      alert("Sign Up action triggered!");
      hidePopup();
    });
  }


  function showCartPopup() {
    popup.classList.remove("hidden");
    if (cartCount > 0) {
      popupContent.innerHTML = `
        <h3>Your Cart</h3>
        <p>You have <strong>${cartCount}</strong> item${cartCount > 1 ? "s" : ""} in your cart.</p>
        <button id="proceedCheckout" style="background: #00260f; color: #fff; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Proceed to Checkout</button>
        <br><br>
        <button id="closeCart" style="background: #a00; color: #fff; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Close</button>
      `;
      document.getElementById("closeCart").addEventListener("click", hidePopup);
      document.getElementById("proceedCheckout").addEventListener("click", function () {
        // Redirect to cart page (if you have one) or process checkout
        alert("Redirecting to cart/checkout page...");
        hidePopup();
      });
    } else {
     
      popupContent.innerHTML = `
        <h3>Blooms are waiting 🌸</h3>
        <p>Your cart is empty.</p>
        <button id="shopNow" style="background: #00260f; color: #fff; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Shop Now</button>
      `;
      document.getElementById("shopNow").addEventListener("click", hidePopup);
    }
  }

  loginIcon.addEventListener("click", function (e) {
    e.preventDefault();
    showLoginPopup();
  });

  
  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    showCartPopup();
  });

  const addToCartButtons = document.querySelectorAll(".product-pics .product a.btn.banner-btn");
  addToCartButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
     
      cartCount++;
      alert("Item added to cart!");
      showCartPopup();
    });
  });

  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("feature").scrollIntoView({ behavior: "smooth" });
    });
  }

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      hidePopup();
    }
  });
});




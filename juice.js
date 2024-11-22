document.getElementById("seeMoreLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Array of card data (you can add more card details here)
  const newCards = [
      {
          imgSrc: "images/juic.jpg",
          title: "GRAPE JUICE",
          text: "A tasty and refreshing juice, perfect for all occasions.",
          price: "$5.99",
          modalId: "grapeModal",
          modalImgSrc: "images/juic.jpg",
          modalText: "Grape Juice is a tasty and refreshing drink, perfect for all occasions. Enjoy the sweet and tangy flavor of freshly squeezed grapes."
      },
      {
          imgSrc: "images/jui.jpg",
          title: "PEACH JUICE",
          text: "A sweet and tangy juice, great for summer days.",
          price: "$6.50",
          modalId: "peachModal",
          modalImgSrc: "images/juice.jpg",
          modalText: "Peach Juice is a sweet and tangy beverage, ideal for summer days. It offers a refreshing taste that will quench your thirst."
      },
      {
          imgSrc: "images/111.png",
          title: "GRAPE JUICE",
          text: "A tasty and refreshing juice, perfect for all occasions.",
          price: "$5.99",
          modalId: "grapeModal",
          modalImgSrc: "images/juic.jpg",
          modalText: "Grape Juice is a tasty and refreshing drink, perfect for all occasions. Enjoy the sweet and tangy flavor of freshly squeezed grapes."
      },
      {
          imgSrc: "images/juice.jpg",
          title: "PEACH JUICE",
          text: "A sweet and tangy juice, great for summer days.",
          price: "$6.50",
          modalId: "peachModal",
          modalImgSrc: "images/juice.jpg",
          modalText: "Peach Juice is a sweet and tangy beverage, ideal for summer days. It offers a refreshing taste that will quench your thirst."
      },
      // Add more cards as needed
  ];

  const container = document.getElementById("additionalCardsContainer");

  newCards.forEach(card => {
      // Create card element
      const cardElement = document.createElement("div");
      cardElement.classList.add("col");

      cardElement.innerHTML = `
          <div class="card" style="width: 18rem;">
              <img src="${card.imgSrc}" class="card-img-top" alt="${card.title}">
              <div class="card-body">
                  <h5 class="card-title">${card.title}</h5>
                  <p class="card-text">${card.text}</p>
              </div>
              <h1>${card.price}</h1>
              <div class="card-body">
                  <a href="#" class="bttn" data-toggle="modal" data-target="#${card.modalId}">READ MORE</a>
              </div>
          </div>
      `;

      // Append card to container
      container.appendChild(cardElement);

      // Create modal element
      const modalElement = document.createElement("div");
      modalElement.classList.add("modal", "fade");
      modalElement.id = card.modalId;
      modalElement.tabIndex = -1;
      modalElement.setAttribute("aria-labelledby", `${card.modalId}Label`);
      modalElement.setAttribute("aria-hidden", "true");

      modalElement.innerHTML = `
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="${card.modalId}Label">${card.title}</h5>
                      <button type="button" class="close btn-close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <img src="${card.modalImgSrc}" class="img-fluid" alt="${card.title}">
                      <p>${card.modalText}</p>
                      <div class="quantity">
                          <button class="btn btn-outline-secondary" type="button">-</button>
                          <input type="text" value="1" class="form-control" style="width: 50px; display: inline-block; text-align: center;">
                          <button class="btn btn-outline-secondary" type="button">+</button>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Buy Now</button>
                  </div>
              </div>
          </div>
      `;

      // Append modal to the body
      document.body.appendChild(modalElement);
  });

  // Optionally, you can hide the "See More" link after the cards are added
  document.getElementById("seeMoreLink").style.display = "none";
});

document.addEventListener('DOMContentLoaded', (event) => {
  // Mango Juice Quantity Buttons
  document.getElementById('decreaseMango').addEventListener('click', () => {
    let qty = document.getElementById('quantityMango');
    qty.value = Math.max(0, parseInt(qty.value) - 1);
  });
  document.getElementById('increaseMango').addEventListener('click', () => {
    let qty = document.getElementById('quantityMango');
    qty.value = parseInt(qty.value) + 1;
  });
  // Apple Juice Quantity Buttons
  document.getElementById('decreaseApple').addEventListener('click', () => {
    let qty = document.getElementById('quantityApple');
    qty.value = Math.max(0, parseInt(qty.value) - 1);
  });
  document.getElementById('increaseApple').addEventListener('click', () => {
    let qty = document.getElementById('quantityApple');
    qty.value = parseInt(qty.value) + 1;
  });

  // Strawberry Juice Quantity Buttons
  document.getElementById('decreaseStrawberry').addEventListener('click', () => {
    let qty = document.getElementById('quantityStrawberry');
    qty.value = Math.max(0, parseInt(qty.value) - 1);
  });
  document.getElementById('increaseStrawberry').addEventListener('click', () => {
    let qty = document.getElementById('quantityStrawberry');
    qty.value = parseInt(qty.value) + 1;
  });

  // Orange Juice Quantity Buttons
  document.getElementById('decreaseOrange').addEventListener('click', () => {
    let qty = document.getElementById('quantityOrange');
    qty.value = Math.max(0, parseInt(qty.value) - 1);
  });
  document.getElementById('increaseOrange').addEventListener('click', () => {
    let qty = document.getElementById('quantityOrange');
    qty.value = parseInt(qty.value) + 1;
  });

 
});
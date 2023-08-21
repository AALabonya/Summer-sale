const allButton = document.getElementsByClassName("box-btn");
let total = 0;
function getButton(data){
    const kitchenwareName = data.childNodes[3].childNodes[3].innerText;
    const selectedBox = document.getElementById("list-item")
    const createLi = document.createElement("li");
    createLi.innerText = kitchenwareName;
    selectedBox.appendChild(createLi);

  const productPrice = data.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseInt(total) + parseInt(productPrice);
  setInnerText("total", total);
  const applyButton = document.getElementById("coupon");
  if( total >= 200){
    applyButton.removeAttribute("disabled");
    applyButton.style.backgroundColor ='MediumVioletRed';
  }
  const mk = document.getElementById("make-purchase");
  if(total > 0 ) {
       mk.removeAttribute('disabled');
       mk.style.backgroundColor ='MediumVioletRed';
  }
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }
function applyCoupon(){
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "SELL200") {
      const discountedAmount = total * 0.2;
      const discountedTotalAmount = discountedAmount.toFixed(2);
      const grandTotal = total - discountedTotalAmount;
      setInnerText("discount", discountedTotalAmount);
      setInnerText("grand-total", grandTotal);
    } else {
      alert("Please provide valid coupon & try again!");
    }
     
  }
  
document.getElementById('go-home').addEventListener('click', function() {
 const discount = document.getElementById("discount");
const grandTotal = document.getElementById("grand-total");
const total = document.getElementById("total");
const selectedBox = document.getElementById("list-item");
const couponCode = document.getElementById("coupon-code");
couponCode.value = '';
selectedBox.innerText = '';
total.innerText ='0.00';
discount.innerText = '0.00';
grandTotal.innerText = '0.00';
const mk = document.getElementById("make-purchase");
 mk.disabled= true;
 mk.style.backgroundColor ='gray'
 const applyButton = document.getElementById('coupon');
  applyButton.disabled = true;
  applyButton.style.backgroundColor ='gray';
  })
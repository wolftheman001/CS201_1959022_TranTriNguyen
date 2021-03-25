// USE THIS ONLY IF THE FAKE STORE API FAILS


document.addEventListener("DOMContentLoaded", function() {
    getItems();
    function getItems() {
      let url = "https://fakestoreapi.com/products";
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        url,
        true
      );
      xhr.onload = function() {
        if(this.status == 200) {
          let result = JSON.parse(this.responseText);
          outputItems(result);
        }
      }
      xhr.send();
    }
    function outputItems(items) {
        let itemdiv = document.querySelector(".items");
        console.log(items);
        let output = "";
        let count = 0;
        items.forEach((item) => {
            if(count == 6){
                return;
            }
            output += `<div class="col-md-4 profile card">
                <h3>${item.title}</h3>
                <h3>${item.price}</h3>
                <div class="container-fluid ">
                <img src="${item.image}" alt="">
                </div>
            </div>`
            count++;
        });
        output+= "<hr class='mb-5 mt-3'>";
        itemdiv.innerHTML = output;
    }

})

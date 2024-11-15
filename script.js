// interface Product {
//     name: string;
//     quantity: number;
//     price: number;
// }
var products = [
    { name: "Laptop", quantity: 10, price: 50000 },
    { name: "Smartphone", quantity: 15, price: 30000 },
    { name: "Tablet", quantity: 8, price: 25000 }
];
var productTable = document.getElementById("productTable").getElementsByTagName("tbody")[0];
function displayProducts() {
    productTable.innerHTML = "";
    products.forEach(function (product, index) {
        var row = productTable.insertRow();
        var nameCell = row.insertCell(0);
        var quantityCell = row.insertCell(1);
        var priceCell = row.insertCell(2);
        var actionCell = row.insertCell(3);
        nameCell.textContent = product.name;
        quantityCell.textContent = product.quantity.toString();
        priceCell.textContent = product.price.toString();
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function () { return deleteProduct(index); };
        actionCell.appendChild(deleteBtn);
    });
}
function addProduct() {
    var productName = document.getElementById("productName").value;
    var quantity = +document.getElementById("quantity").value;
    var price = +document.getElementById("price").value;
    if (productName === "" || quantity <= 0 || isNaN(price) || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }
    var newProduct = { name: productName, quantity: quantity, price: price };
    products.push(newProduct);
    displayProducts();
    // Clear input fields after adding the product
    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}
function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}
// Initial display of products
displayProducts();

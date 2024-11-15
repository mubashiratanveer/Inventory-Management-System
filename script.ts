
interface Product {
    name: string;
    quantity: number;
    price: number;
}

let products: Product[] = [
    { name: "Laptop", quantity: 10, price: 50000 },
    { name: "Smartphone", quantity: 15, price: 30000 },
    { name: "Tablet", quantity: 8, price: 25000 }
];

const productTable = document.getElementById("productTable")!.getElementsByTagName("tbody")[0];

function displayProducts() {
    productTable.innerHTML = "";
    products.forEach((product, index) => {
        const row = productTable.insertRow();
        const nameCell = row.insertCell(0);
        const quantityCell = row.insertCell(1);
        const priceCell = row.insertCell(2);
        const actionCell = row.insertCell(3);

        nameCell.textContent = product.name;
        quantityCell.textContent = product.quantity.toString();
        priceCell.textContent = product.price.toString();
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteProduct(index);
        actionCell.appendChild(deleteBtn);
    });
}

function addProduct() {
    const productName = (document.getElementById("productName") as HTMLInputElement).value;
    const quantity = +(document.getElementById("quantity") as HTMLInputElement).value;
    const price = +(document.getElementById("price") as HTMLInputElement).value;

    if (productName === "" || quantity <= 0 || isNaN(price) || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    const newProduct: Product = { name: productName, quantity, price };
    products.push(newProduct);
    displayProducts();

    // Clear input fields after adding the product
    (document.getElementById("productName") as HTMLInputElement).value = "";
    (document.getElementById("quantity") as HTMLInputElement).value = "";
    (document.getElementById("price") as HTMLInputElement).value = "";
}

function deleteProduct(index: number) {
    products.splice(index, 1);
    displayProducts();
}

// Initial display of products
displayProducts();

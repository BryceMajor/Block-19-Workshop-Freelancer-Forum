// an array containing the freelancers

const freelancers = [
    {name: "Alice", occupation: "writer", price: 30},
    {name: "Bob", occupation: "teacher", price: 50},
    {name: "Carol", occupation: "programmer", price: 70},
    {name: "Mark", occupation: "cleaner", price: 10},
    {name: "Cody", occupation: "driver", price: 20},
    {name: "Jill", occupation: "musician", price: 40},
    {name: "Bryce", occupation: "cook", price: 60},
    {name: "Mac", occupation: "student", price: 80},
    {name: "Tom", occupation: "hoarder", price: 90},
    {name: "Lebron", occupation: "athlete", price: 100}
]

console.log(freelancers)

// interval for the new freelancer to appear

const addFreelancerInterval = setInterval(() => addFreelancer(freelancers), 3000);

// function to add new freelancer to the list

function addFreelancer(freelancers) {
    if (freelancers.length) {
        const table = document.querySelector("table");
        const newFreelancer = freelancers.shift()
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${newFreelancer.name}</td><td>${newFreelancer.occupation}</td><td class = "price">$${newFreelancer.price}</td>`;
        table.append(newRow);
        averagePrice()
    }
}

// Function to find the average price

function averagePrice() {
    const span = document.querySelector("span");
    const pullPrice = document.querySelectorAll(".price");
    console.log(pullPrice)
    let Sum = 0;
    for (const el of pullPrice) {
        Sum += +el.textContent.split("$")[1];
    }
    const averageSum = Sum / pullPrice.length;
    span.textContent = averageSum;
    return averageSum;
}


const trackClick = () => {
    let payload = btoa({
        "userId": "user1",
        "event": "Product Viewed",
        "properties": {
            "token": "f8da5fe54ec7b4e103fd94b369cc06cd",
            "distinct_id": "user1",
            "product_id": "pr_507f1f77bcf86cd799439011",
            "sku": "G-32",
            "category": "Games",
            "name": "Monopoly: 3rd Edition",
            "brand": "Hasbro",
            "variant": "200 pieces",
            "price": 18.99,
            "quantity": 1
        }
    })
    console.log(payload)
    fetch('https://api.mixpanel.com/track/?data=' + payload, {
        method: 'POST',
        event: "Product Viewed",
        token: "f8da5fe54ec7b4e103fd94b369cc06cd",
        headers: {
            'Content-Type': "application/json"
        }
    }).catch(error => console.error(error))
}

// mixpanel.identify('user1');
// mixpanel.track({
//     "userId": "user1",
//     "event": "Product Viewed",
//     "properties": {
//         "product_id": "pr_507f1f77bcf86cd799439011",
//         "sku": "G-32",
//         "category": "Games",
//         "name": "Monopoly: 3rd Edition",
//         "brand": "Hasbro",
//         "variant": "200 pieces",
//         "price": 18.99,
//         "quantity": 1
//     }
// }
// );
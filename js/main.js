const trackClick = () => {
    const payload = {
        "userId": "user1",
        "event": "Product Viewed",
        "properties": {
            "token": "f8da5fe54ec7b4e103fd94b369cc06cd",
            "distinct_id": "user2",
            "product_id": "pr_507f1f77bcf86cd799439011",
            "sku": "G-32",
            "category": "Games",
            "name": "Monopoly: 3rd Edition",
            "brand": "Hasbro",
            "variant": "200 pieces",
            "price": 18.99,
            "quantity": 1
        }
    }


    $.post("https://api.mixpanel.com/track/",
        {
            data: btoa(JSON.stringify(payload)),
        }, function (data, status) {
            console.log(status);
        })
}







//////////Previous Code using mixpanel variable////////


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
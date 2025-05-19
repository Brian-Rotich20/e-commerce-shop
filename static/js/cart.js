var updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'action:', action)

       console.log('USER:', user)
        if (user === 'AnonymousUser') {
            console.log('User is not authenticated')
        }else{
            updateUserOrder(productId, action)
        }
    })
}

/**
 * Sends a POST request to update the user's order with the given product and action.
 * 
 * @param {string} productId - The ID of the product to update.
 * @param {string} action - The action to perform (e.g., "add", "remove").
 */
function updateUserOrder(productId, action) {
    console.log('User is authenticated, sending data...')

    var url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'productId': productId, 'action':action})
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log('data:', data)
        location.reload()
    })
    .catch((error) => {
        console.error('Error:', error)
    })

}



if (localStorage.getItem('products') === null) {
    localStorage.setItem('products', JSON.stringify([]))
}



buttons = document.querySelectorAll('.btn-addtocard')
for (let btn of buttons) {
    btn.addEventListener('click', function () {
        let id = btn.parentElement.id
        let src = btn.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.src
        let pr_name = btn.previousElementSibling.previousElementSibling.firstElementChild.innerHTML
        let price = btn.previousElementSibling.firstElementChild.innerHTML


        let products = JSON.parse(localStorage.getItem('products'))
        let existProd = products.find(pr => pr.Id === id);

        if (existProd == undefined) {
            products.push({
                Id: id,
                Image: src,
                Name: pr_name,
                Price: price,
                Count: 1
            })
            
        }
        else {
            existProd.Count += 1
        }
        


        localStorage.setItem('products', JSON.stringify(products))
        basketCount();

    })
}


     
        
        




function basketCount() {
    let products = JSON.parse(localStorage.getItem('products'))
    let bskcount = document.querySelector('.bas-cou')
    bskcount.innerHTML = products.length
}
basketCount()








 
    















/*
    `
     <tr>
        <th scope="row">${}</th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      `
*/

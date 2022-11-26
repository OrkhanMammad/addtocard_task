let products = JSON.parse(localStorage.getItem('products'))
if (products.length > 0) {
    for (let pair of products) {
        let html = `
        <tr style="padding: 30px 0;">
           <th scope="row">${pair.Id}</th>
           <td><img style="width: 60px;" src="${pair.Image}" alt=""></td>
           <td>${pair.Name}</td>
           <td><input class="inputs" id="${pair.Id}" type="number" value="${pair.Count}" min="1"></td>
           <td>${pair.Price}</td>
           <td class="totalamount" id="${pair.Id}">${pair.Price * pair.Count}</td>
           
         </tr>
         `
        document.getElementById('tbl-bdy').innerHTML += html

    }
}







let inputs = document.querySelectorAll('.inputs')
if (inputs.length > 0) {
    for (let input of inputs) {
        input.addEventListener('change', function () {
            location.reload()
            
            let products = JSON.parse(localStorage.getItem('products'))
            for (let product of products) {
                if (product.Id === input.id) {
                    product.Count = input.value
                    let sum=0;
                    let totalamounts=document.querySelectorAll('.totalamount')
                    for(let totalamount of totalamounts){
                        if(totalamount.id==input.id){
                            totalamount.innerHTML=product.Count*product.Price
                        }
                    }
                    localStorage.setItem('products', JSON.stringify(products))
                    
                    
                }
            }
            



        })
        
    }
}





let sum=0;
for(let pair of products){
    sum+=pair.Count*pair.Price
    document.querySelector('.sum').innerHTML=sum
}






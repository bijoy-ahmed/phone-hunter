const loadPhone = async (searchText , isShowAll) =>{
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
     const data = await res.json();
     const phones = data.data;
    //  console.log(phones);
     displayPhones(phones , isShowAll)
}

const displayPhones = (phones , isShowAll) =>{
    // console.log(phones);

    // 1
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';

    // display show more btn if there are more than 10 phones
    const showContainer = document.getElementById('show-container') 
    if(phones.length > 10 && !isShowAll){
    showContainer.classList.remove('hidden');
    }
    else{
      showContainer.classList.add('hidden');
    }


  // display only 10 if not show all
  if(!isShowAll){
    phones = phones.slice(0,9);

  }

    phones.forEach(phone => {
console.log(phone);

        // 2
     const phoneCard = document.createElement('div');
     phoneCard.classList = `card p-4 bg-yellow-100 shadow-xl`;
    
     //  3
     phoneCard.innerHTML =`
     <figure><img src="${phone.image}" alt="Shoes" /></figure>
     <div class="card-body">
       <h2 class="card-title">${phone.phone_name}</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div class="card-actions justify-end">
         <button class="btn btn-primary">Buy Now</button>
       </div>
     </div>
     `
    //  4
    phoneContainer.appendChild(phoneCard);
    });

//  hide loading  spinner
toggleSpinner(false);

}

// handle search 
const handleSearch = (isShowAll) =>{
  toggleSpinner(true);
const searchField = document.getElementById('search-field');
const searchText = searchField.value ;
console.log(searchText);
loadPhone(searchText , isShowAll);

}

const toggleSpinner = (isLoading) =>{
  const loadSpinner = document.getElementById('spinner');
  if(isLoading){
    loadSpinner.classList.remove('hidden')

  }
  else{
    loadSpinner.classList.add('hidden')
}
}

//Show more
const handleShowAll = () =>{
  handleSearch(true)
} 


// loadPhone();
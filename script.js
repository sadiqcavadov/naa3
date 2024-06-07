const getprod = (a, b) => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        let li = "";
        let slicedData = data.slice(a, b);
        for(let i=0 ; i<slicedData.length; i++){
            li += `<div class="col-12 col-sm-6 col-md-3 my-5">
            <div class="card cardd" style="width: 19rem; height:300px">
            <b>${slicedData[i].category}</b>
            <img src="${slicedData[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${slicedData[i].title}</h5>
            </div>
          </div>
          </div>`;
        };
        document.querySelector('.row2').innerHTML = li;
      })
      .catch(error => console.error('err'));
  };

  getprod(0,3);

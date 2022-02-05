'use strict';
//const getCountryData=function(country){
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError=function(msg)
{
    countriesContainer.insertAdjacentElement('beforeend',msg);
    countriesContainer.style.opacity=1;
}

const renderCountry=function(data,className='')
{
const html=`
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
          </div>
        </article>`;
       countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.getElementsByClassName.opacity=1;
        
};


/*
//old agax format
const request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/name/india');
request.send();

request.addEventListener('load',function()
{
    console.log("didi");
    const [data]=JSON.parse(this.responseText);
    console.log("didi",data);
    console.log(data.languages);
});

    const html=`
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
          </div>
        </article>`;
       countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.getElementsByClassName.opacity=1;
        
        //console.log(data.languages.por);

});
};
getCountryData('portugal');
*/





/*
//es6 format
const getCountryAndNeighbour=function(country){
    //AJAX call country 1
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request=new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener('load',function()
{
    //console.log(this.responseText);
    const [data]=JSON.parse(this.responseText);
    console.log(data);
    //Render country 1
    renderCountry(data);

    //get neighbor Country(2)
    const [neighbour]=data.borders;

    if(!neighbour)return;

const request2=new XMLHttpRequest();
request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
request2.send();
request2.addEventListener('load',function()
{
const data2=JSON.parse(this.responseText);
console.log(data2);
renderCountry+*(data2,'neighbour');
})


});
};
getCountryAndNeighbour('portugal');
*/






// const request=fetch('https://restcountries.com/v3.1/name/india');
// console.log(request);
/*
const getJSON=function(url,errorMsg='something went wrong')
{
    fetch (url).then(
         response=>{if(!response.ok)
            throw new Error(`country not found ${response.status}`)
            response.json();
        })
    
         
}

const getCountryData=function(country)
{
    getJSON(`https://restcountries.com/v3.1/name/${country}`,'country not found')

    .then(data=>{
        renderCountry(data[0]);
        const neighbour=data[0].borders[0];

        if(!neighbour)throw new Error('No neighbour found!');
        //country 2
        return getJSON(
            `https://restcountries.com/v3.1/alpha/$
            {neighbour}`,
            'country not found');
        })
        
        .then(data =>renderCountry(data,'neighbour'))
        .catch(err=>{
            console.log(`${err}`);
            renderError(`something wnt wrong${err.message}.try again!!`)
        })
        .finally(()=>{
            countriesContainer.getElementsByClassName.opacity=1;
        })
};
btn.addEventListener('click',function()
{
    getCountryData('portugal');
})
*/



//code challenge
/*
const wherwAmI=function(lat,lng)
{
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res=>{
        if(!res.ok)throw new Error(`problem with geocoding ${res.status}`)
        res.json()})
    .then(data=>{
        console.log(data);
        console.log(`you are in ${data.city},${data.country}`);
        
        return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res=>{
        if(!res.ok)
             throw new Error(`Country not found(${response.status})`);
        return res.json();
    })
    .then(data=>renderCountry(data[0]))
    .catch(err=>console.error(`${err.message}`));
};
wherwAmI(52.508,13.381);
*/









/*
const lotteryPromise=new Promise(function(resolve,reject)
{
    console.log('lottery draw is happening')
    setTimeout(function(){
    if(Math.random()>=0.5)
    {
        resolve('you Win!!');
    }
    else{
        reject(new Error('you lost your Money'));
    }
    
    },2000)
});
lotteryPromise
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
*/







/*
//promisifying setTimeour
const wait=function(seconds)
{
    return new Promise(function(resolve)
    {
        setTimeout(resolve,seconds*1000);
    });
};

wait(1)
    .then(()=>
    {
        console.log('I waited for 1 seconds');
        return wait(1);
    })
    .then(()=>
    {
        console.log('I waited for 2 seconds');
        return wait(1);
    })
    .then(()=>
    {
        console.log('I waited for 3 seconds');
        return wait(1);
    })
    .then(()=>
    {
        console.log('I waited for 4 seconds');
        return wait(1);
    })
    .then(()=>console.log('i waited for 5 second'));


// setTimeout(()=>{
//     console.log('1 second passed');
//     setTimeout(()=>{
//         console.log('1 second passed');
//         setTimeout(()=>{
//             console.log('1 second passed');
//             setTimeout(()=>{
//                 console.log('1 second passed');
//             },1000);
//         },1000);
//     },1000);
// },1000);


Promise.resolve('abc').then(x=>console.log(x));
Promise.reject(new Error('Problem!')).then(x=>console.error(x));
*/










/*
    const getPosition=function()
    {
        return new Promise(function(resolve,reject)
        {
            // navigator.geolocation.getCurrentPosition(
            //     position=>resolve(position),//does same thing
            //     err=>reject(err)
            // );
              navigator.geolocation.getCurrentPosition(resolve,reject); //does same thing
        })
    }
    getPosition().then(pos=>console.log(pos))
*/







/*
const wherwAmI=function()
{
    getPosition().then(pos=>{
        const{latitude:lat,longitude:lng}=pos.coord;
        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`); 
    })
    .then(res=>{
        if(!res.ok)throw new Error(`problem with geocoding ${res.status}`);
        return res.json()})
    .then(data=>{
        console.log(data);
        console.log(`you are in ${data.city},${data.country}`);
        
        return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res=>{
        if(!res.ok)
             throw new Error(`Country not found(${response.status})`);
             return res.json();
    })
    .then(data=>renderCountry(data[0]))
    .catch(err=>console.error(`${err.message}`));
};
btn.addEventListener('click',wherwAmI);
*/







/*
//coding challeange

const wait=function(seconds)
{
    return new Promise(function(resolve)
    {
        setTimeout(resolve,seconds*1000);
    });
};

const imgContainer=document.querySelector('.images');

const createImage=function(imgPath)
{
    return new Promise(function(resolve,reject)
    {
        const img=document.createElement('img');
        img.src=imgPath;
        img.addEventListener('load',function()
        {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('.error',function()
        {
            reject(new_Error('Image not found'));
        });
    });
};
let currentImg;
createImage('img/img-1.jpg')
.then(img=>{
    currentImg=img;
    console.log('Image 1 loaded');
    return wait(2);
})
.then(()=>{
    currentImg.style.display='none';
    return createImage('img/img-2.jpg');
})
.then(img=>{
    currentImg=img;
    console.log('Image 2 loaded');
    return wait(2);
})
.then(()=>{
    currentImg.style.display='none';
   
})

.catch(err=>console.error(err));
*/



/*
const getPosition=function(){
    return new Promise(function(resolve,reject)
    {
        navigator.geolocation.getCurrentPosition(resolve,reject);
    });
};

const whereAmI=async function()
{ 
    try{
    //geolocation
 const pos=await getPosition();
 const{latitude:lat,longitude:lng}=pos.coors;

 //reverse geoCoding
 const resgeo=await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
 
 if(!resgeo.ok)throw new Error('problem getting location data ');

 const datageo=await resgeo.json();
 console.log(datageo);

    //countrydata
 const res = await fetch(`https://restcountries.com/v3.1/name/${datageo.country}`);
 
 if(!resgeo.ok)throw new Error('problem getting location data ');

 const data=await res.json();
 console.log(data);
 renderCountry(data[0]);
    }
    catch(err)
    {
        console.error(err);
        renderError(` ${err.message}`);
        //reject promise returned from async function
        throw err;
    }
};
console.log('1:will get location');
*/




//mixing async function and promise functionality
/*
whereAmI()
    .then(city=>console.log(`2:${city}`))
    .catch(err=>console.error(`3:${err.message}`))
    .finally(()=>console.log('3:finished getting location'));
console.log('3:finished getting location');
*/
/*
//proper async function
(async function()
{
    try{
        const city=await whereAmI();
        console.log(`2:${city}`)
    }
    catch(err){
        console.error(`3:${err.message}`)
    }
    console.log('3:finied getting location');
    
}
)
*/








/*
const get3Countries=async function(c1,c2,c3)
{
    try{
        const [data1]=await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
        const [data2]=await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
        const [data3]=await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    
        const data=await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`)
        ]);
        //console.log(data);
        console.log(data.map((d)=>d[0].capital));
        //console.log([data1.capital,data2.capital,data3.capital]);
    
    }
    catch(err)
    {
        console.log(err);
    }
    
};
get3Countries('portugal','canada','tanzania');
*/







/*

//promise.race
(async function()
{
    await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/italy`),
        getJSON(`https://restcountries.com/v3.1/name/egypt`),
        getJSON(`https://restcountries.com/v3.1/name/mexico`),
]);
console.log(res[0]);
})();

const timeout=function(s)
{
    return new Promise(function(_,reject)
    {
        setTimeout(function()
        {
            reject(new Error('request took too long!'));
        },sec*1000);
    });
};

Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/tanzania`),
    timeout(1),
    ])
    .then(res=>console.log(res[0]))
    .catch(err=>console.error(err));





//promise.allSettled
    Promise.allSettled([
        Promise.resolve('sucess'),
        Promise.reject('Error'),
        Promise.resolve('Another success'),
]).then(res=>console.log(res));



//promise.all
    Promise.all([
        Promise.resolve('sucess'),
        Promise.reject('Error'),
        Promise.resolve('Another success'),
])
    .then(res=>console.log(res))
    .catch(err=>console.log(err));


//promise.any[ES2021]//result will always be fullfilled promise
Promise.any([
    Promise.resolve('Sucess'),
     Promise.reject('Error'),
        Promise.resolve('Another success'),
])
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

*/






//coding challenges



const wait=function(seconds)
{
    return new Promise(function(resolve)
    {
        setTimeout(resolve,seconds*1000);
    });
};

const imgContainer=document.querySelector('.images');

const createImage=function(imgPath)
{
    return new Promise(function(resolve,reject)
    {
        const img=document.createElement('img');
        img.src=imgPath;
        img.addEventListener('load',function()
        {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('.error',function()
        {
            reject(new_Error('Image not found'));
        });
    });
};
// let currentImg;
// createImage('img/img-1.jpg')
// .then(img=>{
//     currentImg=img;
//     console.log('Image 1 loaded');
//     return wait(2);
// })
// .then(()=>{
//     currentImg.style.display='none';
//     return createImage('img/img-2.jpg');
// })
// .then(img=>{
//     currentImg=img;
//     console.log('Image 2 loaded');
//     return wait(2);
// })
// .then(()=>{
//     currentImg.style.display='none';
   
// })

// .catch(err=>console.error(err));

//PART 1
const loadNPause=async function()
{
    try{
        //load image 1
     let img= await createImage('img/img-1.jpg');
     console.log('Image 1 loaded');
     await wait(2);
     img.style.display='none';
        //load image 2
    let img= await createImage('img/img-2.jpg');
     console.log('Image 2 loaded');
     await wait(2);
     img.style.display='none';
    }
    catch(err)
    {
        console.log(err)
    }
}
loadNPause();

//PART 2
const loadAll=async function(imgArr)
{
    try{
        const imgs=imgArr.map(async img=>await 
        createImage(img));
        //console.log(imgs);
        const imgsEl=await Promise.all(imgs);
        console.log(imgsEl);
        imgsEl.forEach(img=>img.classList.add('parallel'));
    }
    catch(err)
    {
        console.log(err);
    }
};
loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg']);
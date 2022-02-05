'use strict';





//let map,mapEvent;
class Workout{
    date=new Date();
    id=(Date.now()+'').slice(-10);
    clicks=0;
    constructor(coords,distance,duration)
    {
        this.coords=coords;//[lat,lng]
        this.distance=distance;
        this.duration=duration;
        
    }
    _setDescription()
    {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.description=`${this.type[0].toUpperCase()}${this.type.slice(1)}on ${months[this.date.getMonth()]}${this.date.getDate()}`;
    }
    click()
    {
        this.click++;
    }
} 
class Running extends Workout{
    type='running';
    constructor(coords,distance,duration,cadence)
    {
        super(coords,distance,duration)
        this.cadence=cadence;
        this.calcPace();
        this._setDescription();
    }
    calcPace()
    {   //min/km
        this.Pace=this.duration/this.distance;
        return this.Pace
    }
}
class Cycling extends Workout{
    type='cycling';
    constructor(coords,distance,duration,elevationGain)
    {
        super(coords,distance,duration)
        this.elevationGain=elevationGain;
        this.calcPace();
        this._setDescription();
    }
    calcPace(){
    //km/h
    this.speed=this.distance/(this.duration/60)
    return this.speed;
    }
}
const run1=new Running([39,-12],5.2,24,178);
const cycling1=new Cycling([39,-12],27,95,523);
console.log(run1,cycling1);
/////////////application architexture///////////////
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App{
    #map;
    #mapEvent;
    #mapZoomLevel=13;
    #workouts=[];
    constructor()
    {
        //get users position
        this._getPosition();
        //get data from local storage
        this._getLocalStorage();
        //Attach event handlers
        form.addEventListener('submit',this._newWorkout.bind(this));

        inputType.addEventListener('change',this._toggleElevationField);
        containerWorkouts.addEventListener('click',_moveToPopup.bind(this));
    }

    _getPosition()
    {
        console.log('b');
        if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition
        (this._loadMap.bind(this),
        function()
        {
            alert('could not get ur position');
        }
        );
    }
    _loadMap(position)
    {
    console.log('c');
    console.log(position);
    const {latitude}=position.coords;
    const {longitude}=position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude},14z`);
    
    const coords=[latitude,longitude];

     this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //handing clicks on map
    this.#map.on('click',this._showForm.bind(this));
    this._renderWorkoutMarker(work);
    }
    _showForm(mapE)
    {
         this.#mapEvent=mapE;
        form.classList.remove('.hidden');
        inputDistance.focus();
    }
    _hideForm()
    {
        inputDistance.value=inputDuration.value=inputCadence.value=inputElevation.value='';
        
        form.style.display='none';
        form.classList.add('.hidden');
        setTimeout(()=>form.style.display='grid',1000); 
    }
    _toggleElevationField()
    {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }
    _newWorkout(e)
    {
        const validInputs=(...inputs)=>inputs.every(inp=>Number.isFinite(inp));
        const allPositive=(...inputs)=>inputs.every(inp=>inp>0);
        e.preventDefault();
        //get data from form
        const tyep=inputType.value;
        const distance=+inputDistance.value;
        const duration=+inputDuration+value;
        const {lat,lng}=this.#mapEvent.latlng;
        let workout;
        //check if data is valid
        //if workout running,create running object
        if(type==='running')
        {
            const cadence=+inputCadence.value;
            //check if data is valid
            if(
            !validInputs(distance,duration,cadence)||
            !allPositive(distance,duration,cadence)
            )
            return alert('inputs have to be positive number');
            workout=new Running([lat,lng],distance,duration,cadence);
            
        }
        //if workout cycling,create cycling object
        if(type==='cycling')
        {
            const elevation=+inputElevation.value;
         !validInputs(distance,duration,elevation)||
         !allPositive(distance,duration)
        }
        else{
            return alert('inputs have to be positive number');
        }
        //add new object to workout array
        this.#workouts.push(workout);
        //render workout on map as marker
        this._renderWorkoutMarker(workout)
    
        //render workout on list
        this._renderWorkout(workout);
        //hide form +clear input fields                                                                                                                                                         
        this._hideForm();
        //set local storage to all workouts
        this._setLocalStorage();
    
    }
    _enderWorkoutMarker(workout)
    {
         L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup('Workout')
        (L.popup({
        maxWidth:250,
        minWidth:100,
        autoClose:false,
        closeOnClick:false,
        className:`${type}-popup`,
    }))
        .setPopupContent(`${workout.type==='running'?'r':'c'} ${workout.description}`)
        .openPopup();

    }

    _renderWorkoutMarker(workout)
    {
        let html=`<li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">Running on April 14</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type==='running'?'r':'c'}}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}}</span>
            <span class="workout__unit">min</span>
          </div>`;

          if(workout.type==='running')
          html+=
          `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;

        if(workout.type==='cycling')
            html+=`
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
        form.insertAdjacentHTML('afterend',html);
    _moveToPopup(e)
    {
        const workoutEl=e.target.closest('.workout');
        if(!workoutEl)return;
        const workout=this.#workouts.find(work=>work.id===workoutEl.dataset.id);
        console.log(workout);
        this.#map.setView(workout.coords,this.#mapZoomLevel,{
            animate:true,
            pan:{
                duration:1,
            }
        })
    }
    //using the public interface
    workout.click();
    }
    _setLocalStorage()
    {
        localStorage.setItem('workout',JSON.stringify(this.#workouts))//any object to string
    }
    _getLocalStorage()
    {
        const data=JSON.parse(localStorage.getItem('workout'));//convert to array
        console.log(data);
        if(!data)return;
        this.#workouts=data;
        this.#workouts.forEach(work=>
            {
                this._renderWorkout(work);
            })
    }
}

const app=new App();//as sson as object is created constructor of App class is loaded


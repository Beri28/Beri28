fetch('http://localhost:5000/getAll')
.then(res=> {
    return res.json()})
.then(data=>{
    //console.log(JSON.stringify(data[0]))
    const html=data.map(user=>{
        return `
        <div class="main">
        <div class="rest1">
          <!--img src="HydrangeaS.jpg"-->
          <div class="caption">
          <div class="about name">${user.artistName}</div>
          <div class="about location">location</div>
          <div class="about date">date</div>
          <div class="button"><button class="rate" type="submit">Tickets</button></div>
          </div>
        </div>
      </div>
        `;
    }).join('');
    document.querySelector('.cont').insertAdjacentElement('afterbegin',html)
}
)
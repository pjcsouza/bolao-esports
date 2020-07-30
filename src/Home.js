import React, {useEffect}  from 'react';
const axios = require('axios');

const access_token = 'NStrn8s0lmAn6EFOKn4jD4r8-VVmkf_FOAXlUIC3r1KJ4fIgI4I';
function Home() {
  var mt = localStorage.getItem("matches")

  useEffect(()=>{
    if(!mt){
      mt = []
      axios.get("https://api.pandascore.co/tournaments/4152",{
        headers:{
            "Authorization": `Bearer ${access_token}`
        }
      }).then(res=>{
        res.data.matches.forEach(game =>{
            const d = {
                name : game.name,
                begin_at : game.begin_at,
                id : game.id,
                live_embed_url : game.live_embed_url,
                scheduled_at : game.scheduled_at,
                status : game.status,
                winner_id : game.winner_id
            }
            mt.push(d);
        }) 
        console.log(mt)
        localStorage.setItem("matches", JSON.stringify(mt));
      }).catch(err=>{
        console.log(err)
      })
    }else{
      console.log("matches already loaded")
    }

  },[]);


  return <h1>Home</h1>;
}

export default Home;
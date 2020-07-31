import React, {useEffect, useState}  from 'react';
import NavbarHome from './components/Navbar';
import CardMatch from './components/CardMatch';
import _ from 'lodash'
const axios = require('axios');
const access_token = 'NStrn8s0lmAn6EFOKn4jD4r8-VVmkf_FOAXlUIC3r1KJ4fIgI4I';


function Home() {
  const [loading,setLoading] = useState(mt);
  var mt = localStorage.getItem("matches")
  var teams = localStorage.getItem("teams")

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
        localStorage.setItem("teams", JSON.stringify(res.data.teams));
        localStorage.setItem("matches", JSON.stringify(mt));
        setLoading(false)
      }).catch(err=>{
        console.log(err)
      })
    }else{
      console.log("matches already loaded")
    }

  },[]);


  return (
  <div className = "home-body">
    <NavbarHome/>
    {loading? 
    <h1>Carregando</h1>:
    _.map(JSON.parse(mt),(match,index)=>(
    <CardMatch number = {index} data = {match}/>
  ))}
    
  </div>);
}

export default Home;
import React from 'react';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// import { Container } from './styles';
var teams = JSON.parse(localStorage.getItem("teams"))

function CardMatch(props) {
    var t = idTeamsMacth(props.data.name);
    const result = {
        nameT1: idToAcronym(t.idTeam1),
        imgT1 : imgTeam(t.idTeam1),
        nameT2: idToAcronym(t.idTeam2),
        imgT2 : imgTeam(t.idTeam2),
        winnerT1: t.idTeam1==props.data.winner_id,
        winnerT2: t.idTeam2==props.data.winner_id,
        status: props.data.status


    }
    
    
  return (<Card > 

<Container>
  <Row>
    
  
  
  <Col style={{textAlign:'center',lineHeight: '80px'}}><img src={result.imgT1}width="50" height="50" /></Col>
  <Col style={{textAlign:'center',lineHeight: '80px'}}><div style={{margin:'auto'}}>{result.nameT1}  {result.winnerT1?1:0} - {result.winnerT2?1:0}  {result.nameT2}</div></Col>
  <Col style={{textAlign:'center',lineHeight: '80px'}}><img src={result.imgT2}width="50" height="50"/></Col>
  <Col style={{textAlign:'center',lineHeight: '80px'}}>{result.status=="finished"? <Badge variant="danger">Encerrado</Badge>:<Button variant="primary">Apostar</Button>}</Col>
  </Row>
</Container></Card>);
}

function imgTeam(teamId){
    var team = teams.filter(function(item){
        return (item.id == teamId);         
    });
    return team[0].image_url
}



function idToAcronym(teamId){
    var team = teams.filter(function(item){
        return (item.id == teamId);         
    });
    return team[0].acronym

}

function AcronymToId(acronym){
    var team = teams.filter(function(item){
        return (item.acronym == acronym);         
    });
    return team[0].id
    
}



function idTeamsMacth (matchName){
    var teams = {idTeam1: AcronymToId(matchName.split(" vs ")[0]), idTeam2:AcronymToId(matchName.split(" vs ")[1])}
    return teams
}
function dataMatch(data){
    
}

export default CardMatch;


// Partida{te} {props.number}.<img src = {imgTeam(props.data.name)}/>
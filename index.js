function BoardMember(name, homestate, training){
  this.name= name
  this.homestate= homestate 
  this.training= trainig 
  this.veto= function(){ return "No, I must disagree"} 
  this.approve= function(){ return "You can do that"}
  
}
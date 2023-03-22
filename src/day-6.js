
// Encontrar al gato más famoso ["Luna"]


function findFamousCats(cats) {
    let newArrCats = [];
    let maxFollowers = 0;
    //let winCatName = '';
    for(let i = 0; i <= cats.length-1; i++){
    //let name = cats[i].name;
      let followers = cats[i].followers;
      //console.log(followers)
      let totalFollowers = 0;
      for(let j = 0; j <= followers.length-1; j++){
        let followersForSocialMedia = 0;
        followersForSocialMedia = followers[j];
        totalFollowers += followersForSocialMedia;               
      }

      if(totalFollowers > maxFollowers){
        maxFollowers = totalFollowers;  
       // winCatName = cats[i].name;
       newArrCats = [];
       newArrCats.push(cats[i].name)
      }  else  if(totalFollowers === maxFollowers){
        maxFollowers = totalFollowers;  
       // winCatName = cats[i].name;
       newArrCats.push(cats[i].name)
      }          
    //console.log(maxFollowers)   
    }
    return newArrCats;
   // return [maxFollowers,winCatName];   
    //return newArrCats;

    //console.log('is', maxFollowers)    
  }
  

  console.log(findFamousCats([
   
     {
         name: "Mimi",
         followers: [320, 120, 70] //510
       },
       {
         name: "Milo",
         followers: [400, 300, 100, 200] //1000
       },
       {
         name: "Gizmo",
         followers: [250, 750] // 1000
       },
       {
         name: "Tuco",
         followers: [250] //250
       }
   ]))

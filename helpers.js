const fakeDog = () => {

  let dogs = ["maltese", "terrior", "corgi","american eskimo","bulldog",
    "pitbull", "german sherpard" ]  ; 
  
  let random = Math.floor(Math.random() * dogs.length);
  console.log(dogs[random])
  return dogs[random];

   
};

fakeDog();
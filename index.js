function getFirstSelector(selector){
  return document.querySelector(selector)
  
}

function nestedTarget(){
 return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML)+3).toString()
  }
}

function deepestChild(){
   var list = document.querySelectorAll('#grand-node');
   while (typeof list.children[0] != 'undefined'){
      list = list.children[0];
   }
   return list
   
}

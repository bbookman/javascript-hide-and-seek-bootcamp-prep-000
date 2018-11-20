function getFirstSelector(selector){
  return document.querySelector(selector)
  
}

function nestedTarget(){
 return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML)+ n).toString()
  }
}

function deepestChild() {
  var gNode = document.querySelector('div#grand-node')
  var divs = gNode.querySelectorAll('div')
  var res = ''
  for(var i = 0; i < divs.length; i++) {
    if(divs[i].querySelector('div') == null) {
      res = divs[i]
    }
  }
  return res
}

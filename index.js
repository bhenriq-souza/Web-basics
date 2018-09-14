const divWrite = document.getElementById('write'); 
const divShow = document.getElementById('show');

function Clicker() {
  divShow.innerText = "This is a web basics test";
}

function Clear() {
  if(divShow) divShow.innerText = '';
}

function CopyText() {
  let text = divWrite.value;
  divShow.innerText = text;
  divWrite.value = '';
}

function NextPage() {
  console.log('Go next page');
}
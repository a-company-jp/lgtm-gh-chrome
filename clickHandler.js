// clickHandler.js

function handleLGTMButtonClick() {
  console.log('LGTM button clicked');
  callApi();
}

document.addEventListener('DOMContentLoaded', function () {
  const lgtmButton = document.getElementById('lgtmButton');
  lgtmButton.addEventListener('click', handleLGTMButtonClick);
});

async function callApi() {
  const response = await fetch("");
  const  randomImageUrl = await res.json();
  console.log(randomImageUrl )
};

document.addEventListener('DOMContentLoaded', function () {
  const reviewBox = document.querySelector('.review-form');
  if (reviewBox) {
    const lgtmButton = document.createElement('button');
    lgtmButton.innerText = 'Insert LGTM';
    lgtmButton.addEventListener('click', insertLGTMImage);
    reviewBox.appendChild(lgtmButton);
  }
});

function insertLGTMImage() {
  const imageUrl = 'https://example.com/lgtm.png'; // 実際にはAPIから取得したURLを使用
  const commentBox = document.querySelector('.comment-form-textarea');
  if (commentBox) {
    commentBox.value += `![LGTM](${imageUrl})`;
  }
}

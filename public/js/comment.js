// create endpoint

async function submitcomment() {
  const content = document.getElementById('comment').value.trim();
  const post_id = document.getElementById('postid').value;

  if (comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .getElementById('commentbutton')
  .addEventListener('click', submitcomment);

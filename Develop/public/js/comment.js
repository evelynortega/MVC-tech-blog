
// create endpoint

async function submitcomment(){
  const comment = document.getElementById('comment').value.trim();

  if (comment) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({content:comment}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById('commentbutton')
  .addEventListener('click', submitcomment);
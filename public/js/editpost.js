const updatepost = async () => {
  const title = document.getElementById('posttitle').value.trim();
  const content = document.getElementById('postcontent').value.trim();
  const post = document.getElementById('postid').value.trim();
  if (title && content) {
    try {
      const response = await fetch(`/api/posts/${post}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          content,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  }
};

const deletepost = async () => {
  const post = document.getElementById('postid').value.trim();

  try {
    const response = await fetch(`/api/posts/${post}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    console.error(err);
  }
};

document.getElementById('update').addEventListener('click', updatepost);

document.getElementById('delete').addEventListener('click', deletepost);

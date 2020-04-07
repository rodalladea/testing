const body = document.body;
const theme = document.getElementById('theme');

theme.onclick = () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
}
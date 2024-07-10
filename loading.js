const loadings = document.getElementById('loading');
// put your text here
const loadingText = 'Loading...';
// put your text here ↑
const loading = loadingText.split('');
text = '';
for (let i = 0; i < loading.length; i++) {
  text += `<li style="--ld: ${i}00ms;">${loading[i]}<li>`;
}
loadings.innerHTML = text;

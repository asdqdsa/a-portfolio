export const Home = (props) => {
  console.log('home');
  const home = document.createElement('div');
  props.forEach((val) => {
    let li = document.createElement('li');
    li.textContent = val;
    home.appendChild(li);
  });
  home.className = 'home';
  return home;
};

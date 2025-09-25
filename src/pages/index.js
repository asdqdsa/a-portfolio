const Home = (props) => {
  const home = document.createElement('div');

  props.forEach((val) => {
    const li = document.createElement('li');
    li.textContent = val;
    home.appendChild(li);
  });

  home.className = 'home';
  return home;
};

export default Home;

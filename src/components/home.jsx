import {h} from 'hyperapp';

const Home = ({ className, message = '', actions }) => (
  <div className={className}>
    <h1>Home</h1>
    <p data-test-id="view-output">Hello {message}</p>
    <input
      data-test-id="view-input"
      oninput={(e) => {
        actions.view.oninput(e);
        actions.meta.description(e.target.value);
      }}
      value={message}
      oncreate={(el) => el.focus()}
    />
  </div>
);

export default Home;
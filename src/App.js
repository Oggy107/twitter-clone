import './css/main.css';

// Components
import Sidebar from './component/sidebar/Sidebar';
import Feed from './component/feed/Feed';
import Widget from './component/widget/Widget';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
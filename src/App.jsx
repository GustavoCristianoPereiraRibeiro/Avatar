import Avatar from './components/avatar';

function App() {
  return (

    <div className="App-container">
      <h2>Usuarios</h2>
    <div className="profile-list">
      <Avatar nome="João" foto="55" online={true} />
      <Avatar nome="Maria" foto="56" online={false} />
      <Avatar nome="Pedro" foto="57" online={true} />
    </div>
    </div>
  );
}

export default App;
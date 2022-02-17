
import './App.css';
import photo from './Profil/photo.png'
import Profil from './Profil/Profile';
function App() {
  const handleName =(name) => alert(name);
  return (
    <div className="App">
      
      <Profil fullName ='rzouga sahli'
            bio ='nothing '
            Profession =' freelancer '
            handleName={handleName}>
            <img src={photo} alt="ph"/>
            </Profil>

    </div>
  );
}

export default App;
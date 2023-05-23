import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
// import Person from './components/Person';
// import Greet from './components/Greet';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';

function App() {

  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Tailor',
  //     last: 'Swift'
  //   },
  //   {
  //     first: 'Ed',
  //     last: 'Sheeran'
  //   }
  // ]

  return (
    <div className="App">
      {/* <Greet name="Tenant" messageCount={25} isLoggedIn={true}/> */}
      {/* <Person name={personName}/> */}
      {/* <PersonList names={nameList}/> */}
      {/* <Status status='success'/> */}
      {/* <Oscar>
      <Heading>
        Oscar goes to David Tenant!
      </Heading>
      </Oscar> */}
      {/* <Greet name="David" isLoggedIn={true}/> */}
      {/* <Button handleClick={(event, id)=>{
        console.log("Btn Clicked", event, id)
      }}/> */}

      {/* <Input value='' handleChange={(event)=>console.log(event)}/> */}
      
      {/* <Container styles={{border:'1px solid black', padding:'1rem'}}/> */}
      {/* <LoggedIn/> */}
      <User/>
    </div>
  );
}

export default App;

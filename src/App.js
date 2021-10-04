import './App.css';
// import UseStateBasic from './Hooks/UseStateHook/UseStateBasic'
// import UseStateArray from './Hooks/UseStateHook/UseStateArray';
// import UseEfFectOne from './Hooks/UseEffectHook/UseEfFectOne';
// import UseEffectTwo from './Hooks/UseEffectHook/UseEffectTwo';
// import UseEffectUnmount from './Hooks/UseEffectHook/UseEffectUnmount';
// import IntervalCounter from './Hooks/UseEffectHook/IntervalCounter';
// import FetchingDataPosts from './Hooks/UseEffectHook/FetchingDataPosts';
import FetchIndividualPost from './Hooks/UseEffectHook/FetchIndividualPost';
function App() {
  return (
    <div className="app">
      {/* <h1>Hi There !!</h1> */}
      <FetchIndividualPost />
    </div>
  );
}

export default App;

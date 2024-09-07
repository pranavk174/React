import logo from './logo.svg';
import './App.css';
import Item from './components/Text.js'


function App() {
const file = [
  {name :"pranav"},
  {name :"Shubham"},
  {name :"nikhil"},
  {name :"aman"},
  {name :"rachit"},
]

const date = [
  {
    day :3,
    month : "june",
    year:2021
  },
  {
    day :2,
    month : "july",
    year:2022
  },
  {
    day :1,
    month : "august",
    year:2020
  },
  {
    day :9,
    month : "september",
    year:2023
  },
]

  return (
    <div className="flex justify-center  items-center h-[100vh] w-[100vw]">
 <div className="bg-yellow-200 rounded-xl py-8 w-[50%] px-5 space-y-5">
      <Item name={file[0].name} day ={date[0].day} month={date[0].month} year={date[0].year} className="flex"  > 
          </Item>
          <Item name={file[1].name} day ={date[1].day} month={date[1].month} year={date[1].year} className="flex"  > 
          </Item>
          <Item name={file[2].name} day ={date[2].day} month={date[2].month} year={date[2].year} className="flex"  > 
          </Item>
          <Item name={file[3].name} day ={date[3].day} month={date[3].month} year={date[3].year} className="flex"  > 
          </Item>

  
    </div>
    </div>
   
   
  );
}

export default App;

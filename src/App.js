import React,{useState} from "react";
import Calendar from 'react-calendar';
// import logo from './logo.svg';
import "./App.css";
import FilterDate from './components/FilterDate';
import OnFilter from './components/OnFilter';
const events = [
  {
    id: "1",
    title: "Artificial Intellegence",
    status: "Not Deployed",
    env: "Ready to Schedule",
    moveto: "Published",
    assignedBy: "Nikhil More",
    date: new Date(2021, 9, 7),
    startTime: "09:00am",
    endTime: "1:00pm",
    type: "Release",
  },
  {
    id: "2",
    title: "Artificial Intellegence 1.1.0",
    status: "Deployed",
    env: "Ready to Schedule",
    moveto: "Published",
    assignedBy: "Komal Joshi",
    date: new Date(2021, 9, 8),
    startTime: "09:00am",
    endTime: "10:00am",
    type: "ContentPublish",
  },
  {
    id: "3",
    title: "Artificial Intellegence & Virtual Reality",
    status: "Not Deployed",
    env: "Production",
    moveto: "UnPublished",
    assignedBy: "Arjun Reddy",
    date: new Date(2021, 9, 7),
    startTime: "11:00am",
    endTime: "12:00am",
    type: "DueDate",
  },
  {
    id: "4",
    title: "Artificial Intellegence & Virtual Reality",
    status: "Not Deployed",
    env: "Production",
    moveto: "UnPublished",
    assignedBy: "Arjun Reddy",
    date: new Date(2019, 9, 7),
    startTime: "11:00am",
    endTime: "12:00am",
    type: "DueDate",
  },
  {
    id: "5",
    title: "Artificial Intellegence & Virtual Reality",
    status: "Not Deployed",
    env: "Production",
    moveto: "UnPublished",
    assignedBy: "Arjun Reddy",
    date: new Date(2021, 9, 7),
    startTime: "11:00am",
    endTime: "12:00am",
    type: "ContentPublish",
  },
  {
    id: "7",
    title: "Artificial Intellegence 1.1.0",
    status: "Deployed",
    env: "Ready to Schedule",
    moveto: "Published",
    assignedBy: "Komal Joshi",
    date: new Date(2021, 9, 7),
    startTime: "09:00am",
    endTime: "10:00am",
    type: "ContentPublish",
  },
  {
    id: "6",
    title: "Artificial Intellegence & Virtual Reality",
    status: "Not Deployed",
    env: "Production",
    moveto: "UnPublished",
    assignedBy: "Arjun Reddy",
    date: new Date(2020, 2, 28),
    startTime: "11:00am",
    endTime: "12:00am",
    type: "DueDate",
  }
];
  
const App = (props) => {

  const [onClickDate,setOnclickDate]=useState('');
  const captureDate=(event)=>{
    console.log(event);
    setOnclickDate(event);
    console.log(onClickDate);

  }

  
   const selectedEvents = events.map((e) => e.date.toLocaleDateString());
   console.log(selectedEvents.toString());
   

  console.log(events);
 
  return (
    <div>
    <div className="app-name"><h2><b>Calendar App</b></h2> </div>
  <div className="main-content">
    <div className="cal-style"><Calendar onChange={captureDate} values={console.log(new Date(selectedEvents.toString()))} /></div>
    <div><FilterDate actualDate={onClickDate} allEvents={events}/></div>
    <div> <OnFilter actualDate={onClickDate} allEvents={events}/></div>
    </div>
    
  </div>
  );
};

export default App;

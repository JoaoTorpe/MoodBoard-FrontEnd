import React from "react";
import './TopBar.css'

const userName = localStorage.getItem("name")
export function Top(){
 return <div className="topBarcontainer"> <h1>{userName}'s Mood</h1> </div>
}
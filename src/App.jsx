import { useState } from 'react'
import './App.css'
import { styled } from 'styled-components';

function App() {
    const [activeTab, setActiveTab] = useState("html");

    const toggleTab = (val) => {
        setActiveTab(val);
    }
  
  return (
    <>
        <TabsAlign>
            <button onClick={() => toggleTab("html")}>HTML</button>
            
            <button onClick={() => toggleTab("css")}>CSS</button>
            
            <button onClick={() => toggleTab("js")}>JS</button>
            
        </TabsAlign>      
        <div>
            <p hidden={activeTab == "html" ? false : true}>this is html</p>
            <p hidden={activeTab == "css" ? false : true}>this is css</p>
            <p hidden={activeTab == "js" ? false : true}>this is js</p>
        </div>
    </>
  )
}

const TabsAlign = styled.div`
    display: flex;
    flex-direction: row;
`;

export default App

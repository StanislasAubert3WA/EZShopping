import React from "react";
import { useEffect, useState } from "react";
import ItemsList from "../components/ItemsList";
import Nav from "../components/Nav";

function Home(){
    return(
        <div>
            <Nav/>
            <h1>This is my home page</h1>
            <ItemsList />
        </div>
    )
}

export default Home;
import React from "react";
import { useEffect, useState } from "react";
import ItemsList from "../components/ItemsList";

function Home(){
    return(
        <div>
            <h1>This is my home page</h1>
            <ItemsList />
        </div>
    )
}

export default Home;
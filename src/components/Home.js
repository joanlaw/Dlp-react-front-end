import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Card from './Card'
import axios from 'axios'
import { Pagination } from './Pagination.js'
import Header from './Header.js'
import Clusters from './Clusters'


export default function Home(){
    return(
        <div>
            <Header />
            <br /> 
     <br /> 
     <br /> 
     <br /> 
     <br /> 
     <br /> 
        <Clusters />
        </div>
    )
}
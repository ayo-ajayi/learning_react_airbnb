import React from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import './index.css'

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <>
        <Navbar />
        <Hero />
        <h1>App component</h1>
        </>
    )
}
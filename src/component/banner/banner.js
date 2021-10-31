import React from 'react'
import SideImage from "./sideImage"
import { sideImage } from './data/side'
import "./banner.css"
import Banner2 from './banner2'
import Banner3 from "./banner3"
import Sice from "./sice"
import Content from "./content"
import  FoucusContent  from './foucusContent'
export default function banner() {
    return (
        <div>
             <SideImage side={sideImage} />
 <Banner2 />
 <Banner3 />
 <Sice />
 <Content />
 <FoucusContent />
        </div>
    )
}

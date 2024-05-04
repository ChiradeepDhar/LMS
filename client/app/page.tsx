'use client'
import React, {FC,useState} from "react";
import Heading from "./utils/heading"
import Header from "./components/Header"

interface Props{}

const Page: FC<Props> =(props) =>{
  const [open,setOpen] =useState(false);
  const [activeItem,setActiveItem] =useState(0);

  return(
    <div>
      <Heading
      title="LMS"
      description="where knowledge meets power"
      keywords="Programming,MERN"
      />
      <Header
      open={open}
      setOpen={setOpen}
      activeItem={activeItem}
      />
    </div>
  )
};

export default Page;
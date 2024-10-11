// app/hospital/page.tsx
"use client";
import { Input } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import {Button} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";

export default function HospitalPage() {
    const [medicines, setMedicines] = useState([{ id: Date.now() }]); // State สำหรับเก็บรายการยา

    // ฟังก์ชันเพิ่มรายการยา
    const addMedicine = () => {
      setMedicines([...medicines, { id: Date.now() }]);
    };
  
    // ฟังก์ชันลบรายการยา
    const removeMedicine = (id: number) => {
      setMedicines(medicines.filter(medicine => medicine.id !== id));
    };
    const timestamps = [
        {key: "ก่อนอาหารเช้า", label:"ก่อน อาหารเช้า"},
        {key: "ก่อนอาหารกลางวัน", label:"ก่อน อาหารกลางวัน"},
        {key: "ก่อนอาหารเย็น", label:"ก่อน อาหารเย็น"},

        {key: "หลังอาหารเช้า", label:"หลัง อาหารเช้า"},
        {key: "หลังอาหารกลางวัน", label:"หลัง อาหารกลางวัน"},
        {key: "หลังอาหารเย็น", label:"หลัง อาหารเย็น"}
      ];


  return (
    <div className="bg-[#EFEFEF] w-full min-h-screen relative">

        <section className="max-w-3xl m-auto relative py-20">
            <h1 className="text-2xl text-center my-3">ใบจ่ายยา</h1>
            <section className="bg-white px-5 py-6 rounded-lg">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-3">
                    <Input type="text" label="Patiendt ID" placeholder="Enter your Patiendt ID" />
                </div>

                <h1>สุขภาพพื้นฐาน</h1>

                <section className="flex flex-row gap-5 py-3">
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input type="text" label="Hospital" placeholder="Enter your Hospital" />
                    </div>
                
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input type="text" label="Heart Rate" placeholder="Enter your Heart Rate" />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input type="text" label="Hemoglobin" placeholder="Enter your Hemoglobin" />
                    </div>
                </section>

                <div className="flex gap-1 items-center cursor-pointer" onClick={addMedicine} >
                    <h1>การจ่ายยา</h1>
                    <svg className="w-4 h-4 text-gray-800 -mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                    </svg>
                </div>
            
                <section>
                    {medicines.map((medicine) => (
                        <div key={medicine.id} className="bg-gray-100 px-2 py-2 rounded-xl relative my-3">
                            <section className="flex flex-row gap-5 py-3">
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 hover:bg-[#F4F4F5] shadow-none">
                                <Input type="text" label="Medicine Name" placeholder="ชื่อยา" />
                            </div>

                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 hover:bg-[#F4F4F5] shadow-none">
                                <Input type="text" label="Amount/Dosage" placeholder="ปริมาณที่ต้องรับประทานต่อครั้ง" />
                            </div>
                            </section>

                            <Select label="Timestamps" placeholder="เลือกช่วงเวลา" selectionMode="multiple" className="w-full">
                            {timestamps.map((timestamp) => (
                                <SelectItem key={timestamp.key}>{timestamp.label}</SelectItem>
                            ))}
                            </Select>

                            <div className="absolute top-0 right-0 -mt-1.5 -mr-1.5">
                            <svg
                                onClick={() => removeMedicine(medicine.id)} // ฟังก์ชันเมื่อกดลบ
                                className="cursor-pointer w-9 h-9 bg-white border-2 border-gray-400 p-1 rounded-full text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                                />
                            </svg>
                            </div>
                        </div>
                    ))} 
                </section>      

                <Button className="px-5 mt-5">
                ยืนยันข้อมูล
                </Button>
                    
                      
            </section>
        </section>
    </div>
  );
}

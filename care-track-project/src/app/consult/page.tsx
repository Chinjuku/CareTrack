// CareTrack/care-track-project/src/app/consult/page.tsx
"use client";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import React from "react";

export default function ConsultPage() {
    const [selected, setSelected] = React.useState("Upcomings");
   

    return (
        <div className="bg-[#EFEFEF] w-full min-h-screen relative">

            <section className="max-w-2xl m-auto relative py-20">
                <h1 className="text-2xl text-center my-3">ใบจ่ายยา</h1>
                    <div className="flex w-full flex-col bg-white rounded-lg p-3">
                        <Tabs 
                            aria-label="Options"         
                            selectedKey={selected}
                            onSelectionChange={setSelected}
                        >
                            <Tab key="Upcomings" title="Upcomings" className="shadow-none border-none">
                            <Card className="shadow-none border-none bg-white p-0">
                                <CardBody className="p-0 py-3">
                                    <div className="flex border border-black items-start rounded-xl py-3">
                                        <div className="flex flex-col items-center justify-center w-28 h-20">
                                            <h1 className="text-red-500 font-medium">Wed</h1>
                                            <p className="text-red-500 font-medium text-3xl">28</p>
                                        </div>

                                        <hr className="h-20 border-l border-t-0 border-black w-0.5"/>

                                        <div className="mx-4">
                                            <div className="flex items-center gap-3">
                                                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                                                </svg>

                                                <p className="text-gray-400">08:30 - 09:00</p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                                                </svg>

                                                <p className="text-gray-400">Online</p>
                                            </div>

                                        </div>

                                        <div className="mx-4">
                                            <div className="flex justify-start gap-3">
                                                <p className="text-gray-400">30 min meetings call</p>
                                            </div>

                                        </div>
                                    </div>
                                </CardBody>
                            </Card>  
                            </Tab>
                        </Tabs>
                        </div> 
                
                
            </section>
        </div>
    );
}

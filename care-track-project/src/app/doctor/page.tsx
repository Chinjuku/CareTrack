// app/home/page.tsx
"use client";
import {Link, Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Tabs, Tab} from "@nextui-org/react";
import {Calendar} from "@nextui-org/react";
import {parseDate} from '@internationalized/date';
import {TimeInput} from "@nextui-org/react";
import {Time} from "@internationalized/date";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";


export default function DoctorProfilePage() {
    return (
        <div className="bg-white">
            

            <Card className="shadow-none">
                    
                        <CardBody className="py-2 flex flex-row gap-2">
                            <div className="overflow-hidden rounded-xl w-28 h-28">
                                <img className="w-full h-full object-cover object-top" src="https://img.freepik.com/free-photo/smiling-asian-female-doctor-shows-thumbs-up-wears-rubber-gloves-clinic-uniform-stands-white-background_1258-83376.jpg?w=1800&t=st=1728510701~exp=1728511301~hmac=eb05fac4365a8459e0e743c984fc0d38a0b74ca4d0d541e417758a27ba8beb4e" alt="" />
                            </div>

                            <div>
                                <div className="flex flex-col justify-between w-full text-black">
                                    <h1 className="text-sm uppercase font-bold mb-2">พญ. ภัทรมน เหลืองโพธิแมน</h1>
                                    <div className="border-[0.5px] border-gray-600 px-2 rounded-md w-fit my-1">
                                        <p className="text-[0.6rem] text-gray-600">General Health</p>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-1">
                                        <svg className="w-3 h-3 text-[#86CBE9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                                        </svg>
                                        <p className="text-xs text-[#86CBE9]">Queen Sirikrit National</p>
                                    </div>

                                    <div className="flex flex-row justify-start items-center gap-1">
                                        <svg className="w-3 h-3 text-[#86CBE9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 .087.586l2.977-7.937A1 1 0 0 1 6 10h12V9a2 2 0 0 0-2-2h-4.532l-1.9-2.28A2 2 0 0 0 8.032 4H4Zm2.693 8H6.5l-3 8H18l3-8H6.693Z" clip-rule="evenodd"/>
                                        </svg>
                                        <p className="text-xs text-[#86CBE9]">100+ cases</p>
                                    </div>
                                    
                                    <section className="flex flex-row gap-5 items-center">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <svg key={index} className="w-5 h-5 text-yellow-400 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-base font-medium">
                                            300 ฿ <span className="font-normal text-sm">/ 15 นาที</span>
                                        </p>
                                    </section>
                                </div>    
                            </div>
                        </CardBody>

                        
                    
                    {/* <CardFooter className="pb-0 px-0">
                        <div className="bg-[#86CBE9] w-full text-center flex justify-center items-center gap-2 py-2.5 border-t border-[#d8f3ff]">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clip-rule="evenodd"/>
                            </svg>
                            <p className="text-white">ปรึกษาทันที</p>
                        </div>
                    </CardFooter> */}
                </Card>

                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options">
                        <Tab key="About" title="About">
                        <Card>
                            <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rerum veniam, aspernatur eveniet voluptatem placeat possimus modi consequatur ad, officia fuga! Mollitia minus culpa alias soluta quam nihil, illo vel!
                            </CardBody>
                        </Card>  
                        </Tab>
                        <Tab key="Specification" title="Specification">
                        <Card>
                            <CardBody>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </CardBody>
                        </Card>  
                        </Tab>
                        <Tab key="Works" title="Works">
                        <Card>
                            <CardBody>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardBody>
                        </Card>  
                        </Tab>
                    </Tabs>
                </div> 



                <h1 className="my-5 font-medium">Bookings</h1>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-3">
                    <Input type="date" label="Date" />
                </div>

                <div className="flex flex-wrap gap-4 my-3">
                    <TimeInput label="Event Time" />
                </div>

                <Button color="primary">
                    ยืนยันการจอง
                </Button>
            
        </div>
    );
  }
  